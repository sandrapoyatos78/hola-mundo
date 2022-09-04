import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/home/homePage";
import NotfoundPages from './pages/404/notfoundPages.jsx';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePages from './pages/profiles/ProfilePages';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailpage from './pages/tasks/TaskDetailpage';

function AppRoutingOne() {
  return (
    <BrowserRouter>
    <div>
      <aside>
      <Link to='/'> || HOME ||</Link>
      <Link to='/about'> || ABOUT ||</Link>
      <Link to='/faqs'>FAQS</Link>
      
      <Link to='/any404'>ruta inexistente</Link>
      </aside>

    </div>
<main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/faqs' element={<AboutPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/profile' element={<ProfilePages/>} />
        <Route path='/tasks' element={<TaskPage/>} />
        <Route path='/tasks/:id' element={<TaskDetailpage/>} />
        <Route element={<NotfoundPages/>} />
      </Routes>
   
</main>
 </BrowserRouter>
  );
}

export default AppRoutingOne;
