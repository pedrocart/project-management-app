export default function Project({ project }) {
   return (
      <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md gap-3 text-left">
         <button type="button" className="float-right">Delete</button>
         <h2>Learning React</h2>
         <h6>June 18, 2025</h6>

         <p>
            Learn React from the group up
         </p>
         <p>
            Start with the basics, finish with advanced knowledge.
         </p>

         <hr />

         <div className="mt-8 max-w-md mx-auto flex flex-col gap-3 text-left">
            <h2>Tasks</h2>

            <label htmlFor="add-task">
               <input type="text" name="task-name" id="task-name" />
               <span className="float-end p-2 cursor-pointer">Add Task</span>
            </label>

            <ul>
               <li>
                  <p>
                     Learn the Basics <span className="float-end bg-slate-500 rounded text-white px-2 cursor-pointer">Clear</span>
                  </p>
               </li>
               <li>
                  <p>
                     Learn the Advanced <span className="float-end bg-slate-500 rounded text-white px-2 cursor-pointer">Clear</span>
                  </p>
               </li>
               <li>
                  <p>
                     Learn the Basics <span className="float-end bg-slate-500 rounded text-white px-2 cursor-pointer">Clear</span>
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
}