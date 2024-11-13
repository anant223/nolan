import React from "react";
import {Link} from "react-router-dom"

const FeatureCard = ({type, title, desc, $id }) => {
  return (
    <Link to={`/dashboard/${$id}`}>
      <div className="max-w-xs p-4 bg-gray-100 rounded-lg shadow-md sm:w-72 md:w-80 lg:w-96">
        <div className="flex items-center space-x-2 text-gray-600">
          <span className="text-xs font-medium">🎬</span>
          <span className="text-xs font-semibold uppercase">{type}</span>
        </div>
        <h2 className="mt-2 text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Last edited 8 days ago</p>
        <p className="mt-2 text-gray-600">{desc}</p>
        <div className="mt-4 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
