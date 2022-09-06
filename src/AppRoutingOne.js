import { BrowserRouter , Link, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/home/homePage";
import NotfoundPages from './pages/404/notfoundPages.jsx';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profiles/profilePage';
import TaskListComponent from './components/conteiner/task_list';
import TaskDetailpage from './pages/tasks/TaskDetailpage';
import LoginPage from './pages/auth/loginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [ {
      id: 1,
      name: 'Task 1',
      description: 'Mi tarea 1'
  },
  
{
    id: 2,
    name: 'Task 2',
    description: 'Mi tarea 2'
}
];


  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log ('user logged? ', logged)
  }, []);

  return (
    <BrowserRouter>
    <div>
      <aside>
      <Link to='/'> || HOME ||</Link>
      <Link to='/about'> || ABOUT ||</Link>
      <Link to='/faqs'>FAQS</Link>
      <Link to='/task/1'> || TASK 1</Link>
      <Link to='/task/2'> || TASK 2</Link>
      <Link to='/any404'>ruta inexistente</Link>
      <Link to='/login'> || LOGIN</Link>

      </aside>

    </div>
<main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/faqs' element={<AboutPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/online' element={<StatePage/>} />
        <Route path='/profile' element={logged ? <Navigate to="/profile" /> 
        : 
        () => {
         return( <Navigate to="/login" /> )
        }} />
        
         
        
        <Route path='/tasks' element={<TaskListComponent/>} />
        <Route path='/task/:id' 
          // render= {
          //   ({match}) => (
          //     <TaskDetailpage task={taskList[match.params.id-1]}></TaskDetailpage>
          //   )
          // }
        />
      
        
        <Route element={<NotfoundPages/>} />
      </Routes>
   
</main>
 </BrowserRouter>
  );
}

export default AppRoutingOne;
