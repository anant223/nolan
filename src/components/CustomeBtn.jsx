
import React from 'react'

const CustomeBtn = ({name,icon, ...props}) => {
  return (
    <div>
        <button className='bg-blue-700 text-pretty font-semibold px-4 py-2 rounded-[96px] flex justify-center items-center text-white relative gap-2 hover:bg-blue-600'
        {...props}
        >
            <span>{name}</span>
            <span>{icon}</span>
        </button>
    </div>
  )
}

export default CustomeBtn