export default function Tasks({ tasks, handleAddTask, handleDeleteTask }) {
   return (
      <div className="mt-8 max-w-md mx-auto flex flex-col gap-3 text-left">
         <h2>Tasks</h2>

         <label htmlFor="add-task">
            <input type="text" name="task-name" id="task-name" />
            <span
               className="float-end p-2 cursor-pointer"
               onClick={() => {
                  const taskName = document.getElementById('task-name').value;
                  if (taskName) {
                     handleAddTask(taskName);
                     document.getElementById('task-name').value = '';
                  }
               }}
            >
               Add Task
            </span>
         </label>

         <ul>
            {tasks && tasks.map((task) => (               
                  <li key={task.id}>
                     <p>
                        {task.name} 
                        <span 
                           onClick={() => handleDeleteTask(task.id)} 
                           className="float-end bg-slate-500 rounded text-white px-2 cursor-pointer"
                        >
                           Clear
                        </span>
                     </p>
                  </li>
               ))
            }
         </ul>
      </div>
   );
}