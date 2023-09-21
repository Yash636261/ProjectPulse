import {useAuth0} from '@auth0/auth0-react'
import { useState } from "react";
import ProjectSection from "./components/ProjectSection";
import TasksSection from "./components/TasksSection";

function Profile() {
  const {user, isAuthenticated} = useAuth0();

  const [sectionA, setSectionA] = useState(true);
  const [sectionB, setSectionB] = useState(false);

  const changeSectionA = () => {
    setSectionA(!sectionA);
    setSectionB(false);
  };
  const changeSectionB = () => {
    setSectionB(!sectionB);
    setSectionA(false);
  };

  return (
    <div className="flex max-lg:flex-col justify-between bg-slate-900 py-20 text-white min-h-screen px-5">
      <div className=" md:w-1/5 mx-auto">
        <div className="flex flex-col items-center mx-auto w-full mb-8">
          
          {isAuthenticated ?(
            <div><img
            className="w-20 h-20 md:w-42 md:h-42"
            src={user.picture}
            alt=""
          />
          <p className="font-bold text-2xl">{user.name}</p>
          <p className="font-semibold text-xl">{user.email}</p>

            </div>

          ):(<img
            className="w-20 h-20 md:w-42 md:h-42 border-0 rounded-full"
            src="https://img.icons8.com/?size=512&id=108652&format=png"
            alt=""
          />

          )}
          <div className="font-semibold w-44 mx-auto text-black mt-10">
            <button
              onClick={changeSectionA}
              className="p-2 w-1/2 border-0 border-r-2 rounded-l-lg border-black bg-white focus:bg-gray-300"
            >
              Projects
            </button>
            <button
              onClick={changeSectionB}
              className="p-2 w-1/2  border-0 rounded-r-lg bg-white focus:bg-gray-300"
            >
              Tasks
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/6 mx-auto border-0 rounded-lg bg-slate-800 py-10 px-5">
        {sectionA && <ProjectSection />}
        {sectionB && <TasksSection />}
      </div>
    </div>
  );
}

export default Profile;
