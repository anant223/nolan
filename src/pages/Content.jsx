import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from '../components/index'

const Content = () => {
  const genratedData = useSelector(state => state.project.data)
  return (
    <main className='bg-gray-800 w-full h-screen px-16 py-6'>
      <div className=' bg-white w-[650px] h-full mx-auto py-12'>
        <div className="text-black flex justify-center w-full">
          {!genratedData ? <Loading/> : genratedData}
        </div>
      </div>
    </main>
  )
}

export default Content