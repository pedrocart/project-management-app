export default function ProjectList({ projects }) {
   return (
      <ul className="mt-4 space-y-2">

         {
            projects &&
            Object.entries(projects).map(([key, project]) => (
               <li key={key} className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition duration-200 flex flex-col gap-1">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <h6>{project.dueDate}</h6>
               </li>
            ))
         }
      </ul>
   );
}