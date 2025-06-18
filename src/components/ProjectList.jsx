import { useEffect } from "react";

export default function ProjectList({ projects, setSelectedProjectKey }) {
   
   return (
      <ul className="mt-4 space-y-2">

         {
            projects &&
            Object.entries(projects).map(([key, project]) => (
               <li 
                  key={key} 
                  className="p-6 bg-gray-100 rounded hover:bg-gray-200 transition duration-200 flex flex-col gap-1 cursor-pointer"
                  onClick={() => {
                     setSelectedProjectKey(key);                     
                  }}
                  >
                  <h2>{project.title}</h2>
               </li>
            ))
         }
      </ul>
   );
}