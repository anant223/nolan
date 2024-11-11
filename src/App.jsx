import React, { useEffect, useState } from "react";
import { Footer, Header } from "./components/index.js";
import authService from "./appwrieService/authService.js";
import { useDispatch } from "react-redux";
import { logout, login } from "./redux_slice/authSlice";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard");

   useEffect(() => {
     authService
       .getCurrentUser()
       .then((userData) => {
         if (userData) {
           dispatch(login({ userData }));
         } else {
           dispatch(logout());
         }
       })
       .finally(() => setLoading(false));
   }, []);

  return (
    <div className="">
      <Header />
        <Outlet/> 
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
