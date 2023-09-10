import axios from 'axios';
import React from 'react'
import { useState ,useEffect } from 'react'

function TasksSection() {

  const [projectTask, setProjectTask] = useState();

  useEffect(()=>{
    axios.get("http://localhost:5000/api/project/allprojects")
    .then((respose)=>{
      setProjectTask(respose.data);
    })
    .catch(error){
      console.error("erro fetching the data:", error);
    }
  },[]);


  return (
    <div>
          <div className="flex justify-center items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://img.icons8.com/?size=512&id=rnwtSv4H3pXk&format=png"
              alt=""
            />
            <h1 className="font-bold text-3xl my-5">Tasks</h1>
          </div>

          <div className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
            <h1 className="font-bold text-lg">Project 1</h1>
            <p>this project is about something crazy so im very much exited.</p>
          </div>
        </div>
  )
}

export default TasksSection

