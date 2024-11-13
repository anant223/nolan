import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import dbService from "../appwrieService/dbService";

const NewProjectModal = ({ onClose, onProjectCreated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const status = useSelector((state) => state.toggle.status);
  const userData = useSelector((state) => state.auth.userData);

  const createProject = async (data) => {
    try {
      const createdProject = await dbService.createPost({
        ...data,
        userID: userData?.userData?.$id,
      });
      console.log(createdProject);
      if (createdProject) {
        onProjectCreated(createdProject)
        alert(`Project created: ${data.title}`);
        onClose();
        reset()
        
      }
    } catch (error) {
      console.error("Failed to create project:", error);
      alert("Failed to create project. Please try again.");
    }
  };

  return (
    <div
      className={
        status
          ? "fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
          : "hidden"
      }
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create a new project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Let’s start your project by giving it a memorable title. You can also
          add a cover for it later on.
        </p>
        <form onSubmit={handleSubmit(createProject)}>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Title</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Untitled Project"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Type</label>
            <select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              {...register("type", { required: "Type is required" })}
            >
              <option value="Feature Film">Feature Film</option>
              <option value="Short Film">Short Film</option>
              <option value="Social Media">Social Media</option>
            </select>
            {errors.type && (
              <p className="text-red-500">{errors.type.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="text-gray-700 text-sm font-medium">
              Description
            </label>
            <textarea
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Description"
              rows="3"
              {...register("desc", { required: "Description is required" })}
            />
            {errors.desc && (
              <p className="text-red-500">{errors.desc.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-2"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectModal;
