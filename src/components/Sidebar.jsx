import { useRef, useState, useEffect } from "react";
import ProjectList from "./ProjectList.jsx";
import ModalForm from "./ModalForm.jsx";

const initialProjects = {
   "Project 1": {
      title: "Project 1",
      description: "Description for Project 1",
      dueDate: "2023-12-31"
   },
   "Project 2": {
      title: "Project 2",
      description: "Description for Project 2",
      dueDate: "2024-01-15"
   }
};

export default function Sidebar() {

   const [projects, setProjects] = useState(initialProjects);

   const dialog = useRef();

   function handleSave(project) {
      setProjects(prevProjects => ({
         ...prevProjects,
         [project.title]: project
      }));
      dialog.current.reset();
      dialog.current.close();
   }

   useEffect(() => {
      console.log("Projects updated:", projects);
   });

   function handleAddProject() {
      dialog.current.open();
   }

   return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
         <ModalForm ref={dialog} onSave={handleSave} />
         <h1 className="text-2xl font-bold mb-4 text-center">YOUR PROJECTS</h1>
         <button onClick={handleAddProject} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            + Add Project
         </button>

         <ProjectList projects={projects} />

         <div className="mt-6 text-center text-gray-500">
            <p>© 2023 Your Company</p>
         </div>
      </div>
   );
}