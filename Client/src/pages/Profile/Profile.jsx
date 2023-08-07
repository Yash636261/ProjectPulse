import React from "react";

function Profile() {
  return (
    <div className="flex max-lg:flex-col justify-between bg-slate-700 py-20 text-white min-h-screen px-5">
      <div className=" md:w-1/5 mx-auto">
        <div className="flex flex-col items-center mx-auto w-full mb-8">
          <img
            className="w-20 h-20 md:w-42 md:h-42"
            src="https://img.icons8.com/?size=512&id=108652&format=png"
            alt=""
          />
          <p className="font-bold text-2xl">Username</p>
          <p className="font-semibold text-xl">Username@gmail.com</p>
        <div className="font-semibold w-44 mx-auto text-black mt-10">
          <button className="p-2 w-1/2 border-0 border-r-2 rounded-l-lg border-black bg-white focus:bg-gray-300">
            Projects
          </button>
          <button className="p-2 w-1/2  border-0 rounded-r-lg bg-white focus:bg-gray-300">
            Tasks
          </button>
        </div>
        </div>
      </div>
      <div className="w-full md:w-4/6 mx-auto border-0 rounded-lg bg-slate-800 py-10 px-5">
        <h1 className="text-center font-bold text-3xl my-5">Projects</h1>
        <div className="text-black my-2 flex justify-between items-center py-2">
          <div>
            <input
              type="search"
              className="max-w-2xl p-2 border-0 rounded-l-lg bg-white focus:bg-gray-300 focus:border-gray-700 placeholder:text-black font-semibold"
            />
            <button className="p-2 border-0 rounded-r-lg bg-white focus:bg-gray-300">
              Search
            </button>
          </div>
          <div className="font-bold ">
            <button className="p-2 border-0 rounded-lg bg-yellow-400 hover:bg-yellow-300">
              New Project
            </button>
          </div>
        </div>

        <div className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
          <h1 className="font-bold text-lg">Project 1</h1>
          <p>this project is about something crazy so im very much exited.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
