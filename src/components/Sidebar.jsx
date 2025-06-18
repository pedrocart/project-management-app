import ProjectList from "./ProjectList.jsx";

export default function Sidebar({ setSelectedProjectKey, handleAddProject, projects }) {

   return (
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
         <h1 className="text-2xl font-bold mb-4 text-center">YOUR PROJECTS</h1>
         <button onClick={handleAddProject} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            + Add Project
         </button>

         <ProjectList
            projects={projects}
            setSelectedProjectKey={setSelectedProjectKey}
         />

         <div className="mt-6 text-center text-gray-500">
            <p>© 2023 Your Company</p>
         </div>
      </div>
   );
}