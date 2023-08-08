import React from 'react'

function ProjectSection() {
  return (
    <div>
          <div className="flex justify-center items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://img.icons8.com/?size=512&id=6R735OAB4eCV&format=png"
              alt=""
            />
            <h1 className="font-bold text-3xl my-5">Projects</h1>
          </div>
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
          <div className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
            <h1 className="font-bold text-lg">Project 1</h1>
            <p>this project is about something crazy so im very much exited.</p>
          </div>
          <div className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
            <h1 className="font-bold text-lg">Project 1</h1>
            <p>this project is about something crazy so im very much exited.</p>
          </div>
          <div className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
            <h1 className="font-bold text-lg">Project 1</h1>
            <p>this project is about something crazy so im very much exited.</p>
          </div>
          <div className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
            <h1 className="font-bold text-lg">Project 1</h1>
            <p>this project is about something crazy so im very much exited.</p>
          </div>
        </div>
  )
}

export default ProjectSection
