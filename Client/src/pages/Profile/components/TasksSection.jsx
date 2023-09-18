import axios from "axios";
import { useState, useEffect } from "react";

function TasksSection() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Fetch projects from the backend when the component mounts
    axios
      .get("http://localhost:5000/api/project/allprojects") // Use axios.get to make a GET request
      .then((response) => {
        setProjects(response.data); // Update state with the data from the response
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  let noTaskFound = true;

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

      {projects.map((project) => {
          if (project.projectTasks) {
            noTaskFound = false; 
            return(
          <div 
          key={project._id}
          className="bg-slate-700 hover:bg-slate-600 border-0 rounded-lg py-5 px-3 my-1">
          <h1 className="font-bold text-lg">{project.projectName}</h1>
            <p>{project.projectTasks}</p>
          </div>
          );}
          return null;
      })}

      {noTaskFound && 
        <p className="text-center">Currently, there are no tasks.</p>
      }
    </div>
  );
}

export default TasksSection;
