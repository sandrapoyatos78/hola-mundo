import { BrowserRouter , Link, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/auth/loginPage';
import Dashboard from './pages/dasboard/dashboard';
function AppRoutingFinal() {
  return (
    <BrowserRouter>
    <div>

    </div>
<main>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
   
</main>
 </BrowserRouter>
  );
}

export default AppRoutingFinal;
