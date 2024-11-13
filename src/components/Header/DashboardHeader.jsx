import React, { useState } from "react";
import { CustomeBtn, Logo, Logout } from "../index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isDisplay } from "../../redux_slice/toggleSlice";
import authService from "../../appwrieService/authService";

const DashboardHeader = () => {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]); // State to store project list

  const handleClick = () => {
    dispatch(isDisplay());
  };

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `Project ${projects.length + 1}`,
      createdBy: userData?.name || "Unknown",
    };
    setProjects([...projects, newProject]); // Add new project to the list
  };

  return (
    <div className="p-2 bg-gray-700 sticky left-0 top-0 w-full">
      <div className="flex justify-between px-12">
        <div className="flex items-center text-white">
          <div className="mr-6">
            <Logo />
          </div>
          <div className="font-bold text-white">
            <h1 className="text-xl flex items-center gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
                </svg>
              </span>
              <Link to="/dashboard">Dashboard</Link>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <CustomeBtn
              onClick={() => {
                handleClick();
                handleAddProject(); // Add new project on click
              }}
              name="New Project"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
              }
            />
          </div>
          <div>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
