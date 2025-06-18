import Tasks from "./Tasks.jsx";

export default function Project({ project, onDeleteProject, handleDeleteTask, handleAddTask }) {

   return (
      <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md gap-3 text-left">
         <button
            type="button" 
            className="float-right"
            onClick={() => onDeleteProject(project.title)}
         >
            Delete
         </button>
         <h2>{project.title}</h2>
         <h6>{project.dueDate}</h6>

         <p>
            {project.description || "No description provided for this project."}
         </p>

         <hr />

         <Tasks
            tasks={project.tasks}
            handleAddTask={taskName => handleAddTask(project.title, { id: Date.now(), name: taskName, completed: false })}
            handleDeleteTask={taskId => handleDeleteTask(project.title, taskId)}
         />

      </div>
   );
}