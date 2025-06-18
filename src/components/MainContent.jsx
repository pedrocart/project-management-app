import noProjectsImg from '../assets/no-projects.png';
import Project from './Project.jsx';
import ProjectList from './ProjectList.jsx';

export default function MainContent() {
   return (
      <div className="mt-8 text-center p-6">
         <img src={noProjectsImg} alt="" className="max-w-48 m-auto" />
         <p>
            There are no projects yet.
         </p>
         <p>
            Fill in the form to create your first project.
         </p>

         <ProjectList />

         <Project />


      </div>
   );
}