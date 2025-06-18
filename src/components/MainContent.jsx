import noProjectsImg from '../assets/no-projects.png';
import Project from './Project.jsx';


export default function MainContent({ project, handleDeleteProject, handleAddTask, handleDeleteTask }) {
   

   return (
      <div className="mt-8 text-center p-6">
         <img src={noProjectsImg} alt="" className="max-w-48 m-auto" />
         <p className="text-gray-500 text-lg mt-4">
            Click on a Project to view its details.
         </p>

         {project && 
            <Project 
               project={project}
               handleDeleteTask={handleDeleteTask}
               handleAddTask={handleAddTask}
               onDeleteProject={handleDeleteProject}
            />
         }

      </div>
   );
}