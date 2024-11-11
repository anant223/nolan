import React from 'react'

const Card = ({about, btnName, icon, title}) => {
  return (
    <div>
        <div className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md w-full">
        <div className="bg-blue-600 p-2 rounded-full mr-4">
            {icon}
        </div>
        <div>
            <h2 className="text-white font-semibold">{title}</h2>
            <p className="text-gray-400">
            {about}
            </p>
            <button className="mt-2 text-blue-400 font-semibold hover:underline">
            {btnName} →
            </button>
        </div>
        </div>
    </div>
  );
}

export default Card