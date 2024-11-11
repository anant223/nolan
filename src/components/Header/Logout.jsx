import React from 'react'
import authService from '../../appwrieService/authService'
import { useDispatch } from 'react-redux'
import {logout} from "../../redux_slice/authSlice"
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const intialLetter = (email) => {
    return email ? email.charAt(0).toUpperCase() : "A";
  };


  const logoutSession = async () =>{
    try {
        const user = await authService.getCurrentUser();

        if (user) {
          const logoutUser = await authService.logout();
          if (logoutUser) {
            dispatch(logout());
            navigate("/")
          }
        }
    } catch (error) {
        console.log("Something went wrong while logging out the sesssion", error);
    }
  }
  return (
    <div>
      <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center" onClick={logoutSession}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className=" mr-2"
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
          />
        </svg>
        Logout
      </button>
    </div>
  );
}

export default Logout