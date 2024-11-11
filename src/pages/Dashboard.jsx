import React, { useEffect, useState } from 'react'
import { Card, FeatureCard, Loading, NewProjectModal } from '../components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { isDisplay } from '../redux_slice/toggleSlice.js';
import dbService from '../appwrieService/dbService.js';
import { getData } from '../redux_slice/dbSlice.js';

const Dashboard = () => {
   const dispatch = useDispatch();
   const authData = useSelector(state => state.auth.userData)
   const projectData = useSelector(state => state.project.data)
   const handleClick = () => {
     dispatch(isDisplay());
   };

   useEffect(() => {
     if (!authData) return; 

     const projectPreview = async () => {
       try {
         const project = await dbService.getPosts(authData.userData.$id);
         if (project) {
           dispatch(getData(project.documents));
         }
       } catch (error) {
         console.error("Failed to fetch posts", error);
       }
     };

     projectPreview();
   }, [authData]);

 
  return !authData ? <Loading/> :
    <main>
      <div className="flex w-full flex-wrap">
        <div className="bg-gray-700 flex fixed z-30">
          <div className=" border-r-2 border-gray-300 overflow-y-scroll h-screen">
            <div className=" flex items-center gap-2 flex-col w-14 py-2 relative"></div>
          </div>
        </div>
        <div className="bg-gray-600 ml-14  w-full text-white   flex p-6 space-x-2 h-full">
          <div className="w-full">
            <Card
              title="Leave Feedback"
              about="Help us make NolanAI even better!"
              btnName="Take Survey"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
              }
            />
          </div>
          <div className="w-full">
            <Card
              title="Join us on Discord!"
              about="Check out our Discord page to be a part of the NolanAI community"
              btnName="Join Our Community"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              }
            />
          </div>
        </div>

      </div>
      <div className=' ml-20 mt-6 flex flex-wrap gap-4 w-full h-auto'>
        {projectData?.map(project => <FeatureCard key={project.$id} {...project}/>)}
      </div>
      <div>
        <NewProjectModal
          onClose={handleClick}
        />
      </div>
    </main>
}

export default Dashboard