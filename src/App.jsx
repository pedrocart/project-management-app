import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';

function App() {

   return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
         <Sidebar />
         <MainContent />
      </div>
   );
}

export default App;
