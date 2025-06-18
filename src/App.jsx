import { useState, useRef } from 'react';

import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import ModalForm from './components/ModalForm.jsx';

const initialProjects = {
   "Project 1": {
      title: "Project 1",
      description: "Description for Project 1",
      dueDate: "2023-12-31",
      tasks: [
         { id: 1, name: "Learn the Basics", completed: false },
         { id: 2, name: "Learn the Advanced", completed: false },
         { id: 3, name: "Build a Projecta", completed: false }
      ]
   },
   "Project 2": {
      title: "Project 2",
      description: "Description for Project 2",
      dueDate: "2024-01-15",
      tasks: [
         { id: 1, name: "Learn the Basics", completed: false },
         { id: 2, name: "Learn the Advanced", completed: false },
         { id: 3, name: "Build a Projecta", completed: false }
      ]
   }
};


function App() {
   const [selectedProjectKey, setSelectedProjectKey] = useState(null);
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

   function handleAddProject() {
      dialog.current.open();
   }

   function handleDeleteProject(projectKey) {
      setProjects(prev => {
         const updated = { ...prev };
         delete updated[projectKey];
         return updated;
      })

      if (selectedProjectKey === projectKey) {
         setSelectedProjectKey(null);
      }
   }

   function handleAddTask(projectTitle, task) {
      setProjects(prev => ({
         ...prev,
         [projectTitle]: {
            ...prev[projectTitle],
            tasks: [task, ...prev[projectTitle].tasks]
         }
      }));
   }

   function handleDeleteTask(projectTitle, taskId) {
      setProjects(prev => ({
         ...prev,
         [projectTitle]: {
            ...prev[projectTitle],
            tasks: prev[projectTitle].tasks.filter(task => task.id !== taskId)
         }
      }));
   }

   return (
      <div className="flex min-h-screen items-start justify-center bg-gray-100">
         <ModalForm ref={dialog} onSave={handleSave} />
         <Sidebar
            setSelectedProjectKey={setSelectedProjectKey}
            handleAddProject={handleAddProject}
            projects={projects}
         />
         <MainContent 
            project={selectedProjectKey ? projects[selectedProjectKey] : null}
            projects={projects}
            handleAddTask={handleAddTask}
            handleDeleteTask={handleDeleteTask}
            handleDeleteProject={handleDeleteProject}
         />
      </div>
   );
}

export default App;
