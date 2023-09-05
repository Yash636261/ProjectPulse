import axios from "axios";
import { useState } from "react";

function NewProject() {

  const [formData, setFormData] = useState({
    projectName: "",
    projectDesc: "" 
  });
  const [Error , setError] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () =>{
    const newErrors ={};
    if(!formData.projectName.trim()){
      newErrors.projectName = 'project name is required.'
    }
    if(!formData.projectDesc.trim()){
      newErrors.projectDesc ="project description required."
    }
    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!validateForm()) {
      return; // Don't submit if there are validation errors
    }

    try {
      // Make an Axios POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/project/addproject', formData);

      // If the request is successful, you can handle the response data here
      console.log('Project added:', response.data);

      // Clear the form fields after successful submission (optional)
      setFormData({
        projectName: '',
        projectDesc: '',
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error adding project:', error);
    }
  };
  return (
    <div className="bg-slate-900 min-h-screen py-20 text-white">
      <div className="text-center font-bold text-2xl">
        <h1>Create New Project</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-slate-800 py-10 px-5 border-0 rounded-lg my-10">
        <form className=" mx-auto ">
          <label className="block mb-2 font-semibold text-base" htmlFor="projectName">
            Project Name
          </label>
          {/* {Error.projectName && (
          <p>{Error.projectName}</p>

          )} */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
  type="text"
  name="projectName"
  id="projectName"
  value={formData.projectName}
  onChange={handleInputChange}
  className="text-black border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Project name"
/>


          </div>

          <label className="block mb-2 font-semibold text-base mt-5">
            Description
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
  type="text"
  name="projectDesc"
  id="projectDesc"
  value={formData.projectDesc}
  onChange={handleInputChange}
  className="text-black border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Description"
/>
          </div>

          <label
            htmlFor="email-address-icon"
            className="block mb-2 mt-5 font-semibold text-base"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              name="email"
              value=""
              onChange=""
              id="email-address-icon"
              className="text-black  border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@mail.com"
            />
          </div>

          <label
            className="block mb-2 font-semibold text-base mt-5"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="gray"
                viewBox="0 0 50 50"
              >
                <path d="M42,21H8c-1.654,0-3,1.346-3,3v23c0,1.654,1.346,3,3,3h34c1.654,0,3-1.346,3-3V24C45,22.346,43.654,21,42,21z M13,38 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C15,37.105,14.105,38,13,38z M21,38c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C23,37.105,22.105,38,21,38z M29,38c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2 C31,37.105,30.105,38,29,38z M37,38c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C39,37.105,38.105,38,37,38z M12,19v-4.01 C12,7.827,17.827,2,24.99,2h0.02C32.173,2,38,7.827,38,14.99V19h-2v-4.01C36,8.93,31.069,4,25.01,4h-0.02C18.931,4,14,8.93,14,14.99 V19H12z"></path>
              </svg>
            </div>
            <input
              className="text-black border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:border-blue-500"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mt-5 my-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="my-1 bg-blue-800 py-2 px-4 text-sm font-semibold border-0 rounded-md   hover:bg-blue-900"
            >
              <span className="">Create</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProject;
