import React, { useEffect, useState } from 'react'
import dbService from '../appwrieService/dbService';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux_slice/dbSlice';
import { CustomeBtn, Loading } from '../components';
import { createChatContent } from '../openAPI/openAI';

const ProjectDetail = () => {
  const {id} = useParams();
  const [project, setProject] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect((()=>{
    if(id){
      dbService.getPost(id).then(project => {
        if(project){
          setProject(project)
        }
      })
    }
   
  }),[id])

  const createContent = async ()=>{
   try {
     const createdContent = await createChatContent({...project})
     if (createdContent) {
       dispatch(getData(project))
       navigate(`/dashboard/${project.$id}/result`);
     }
   } catch (error) {
    console.error("Error creating content:", error);
   }
    
  }
  console.log(project);
  return !id ? <Loading/> :
    <main className=" w-full  bg-gray-800 px-14 text-white py-4">
      <div className="flex justify-between">
        <div className="flex items-center mb-8 w-full">
          <div className="flex justify-center items-center h-40 bg-gray-700 rounded-lg mr-6">
            <button className="bg-blue-600 px-3 py-2 rounded-lg mx-2 hover:bg-blue-500">
              Generate Cover
            </button>
            <button className="bg-blue-600 px-3 py-2 rounded-lg mx-2 hover:bg-blue-500">
              Upload Cover
            </button>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{project?.title}</h1>
            <p className="text-gray-400">Last Edited 3 days ago</p>
            <p className="text-gray-500 mt-1">Synopsis: {project?.desc}</p>
            <span className=" px-2 py-1 rounded-full text-sm mt-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M2.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
              </svg>
              {project?.type}
            </span>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </div>
      </div>

      <section className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-center text-xl font-semibold mb-2">
          {project?.title}
        </h2>
        <p className="text-center text-gray-400 mb-4">
          What’s your first move? Select a feature to kick off your project.
        </p>

        <div className=" flex justify-center gap-4 py-16">
          <CustomeBtn name="Screen Play" onClick={createContent} />
          <CustomeBtn name="Breakdown" />
        </div>
      </section>
    </main>
}

export default ProjectDetail