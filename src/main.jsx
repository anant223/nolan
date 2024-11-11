import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from "./redux_store/appStore.js"
import Content from './pages/Content.jsx'
import AuthPage from './pages/AuthPage.jsx'
import Home from "./pages/Home.jsx"
import Dashboard from './pages/Dashboard.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import { AuthLayout } from './components/index.js'

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: (
          <AuthLayout authentication={false}>
            <AuthPage />
          </AuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
            <Dashboard />
        ),
      },
      {
        path: "/dashboard/:id",
        element: (
            <ProjectDetail />
        ),
      },
      {
        path: "/dashboard/:id/result",
        element: (
            <Content />
        ),
      },
    ],
  },
]);





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>
);
