import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/conteiner/task_list';
import ContactComponentA from './components/pure/componentB';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponeneteconCont from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GrettingStyle from './components/pure/grettingStyle';
import Ejemplo_prac from './hooks/livecycle/ejemplo_prac.jsx';
import Father from './components/conteiner/father';
import OptionalRender from './components/pure/optional_render';
import LoginFormik from './components/pure/forms/loginFormik';
import RegistrerFormik from './components/pure/forms/registrerFormik';
import AsycEjem from './components/pure/asycEjem';
import Obserbable from './components/pure/obserbable';
import FetchExam from './components/pure/FetchExam';

function App() {
  return (
    <div className="App">
       {/* <header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name= {"SANDRA"}></Greeting> */}
        {/* Componente ejemplo funcional*/}
        {/* <Greetingf name= "San"></Greetingf> */}
         {/* Componente listado de tareas */}
      
         {/* <ContactComponentA></ContactComponentA>*/}
         {/* <Ejemplo1></Ejemplo1> */}
       {/*<Ejemplo2></Ejemplo2> */}
       {/* <MicomponeneteconCont></MicomponeneteconCont>   */}
          {/* <Ejemplo4 nombre ='sandra'>
          todo esto son los prop.children   
          <h3>
            Contenido del props.children!!
          </h3>
         {/* </Ejemplo4> */}
          {/* <GrettingStyle name = "Sandra"></GrettingStyle>  */}
           {/* <Ejemplo_prac></Ejemplo_prac>  */}

      {/* </header> */}
        {/* GESTION DE EVENTOS */}
   
    {/* EJEMPLOS DE RENDERIZADO CONDICIONAL */}
     {/*  <OptionalRender></OptionalRender> */}
    {/* EJEMPLOS DE FORMIK Y YUP */}
     {/*<LoginFormik></LoginFormik> */}
     {/* <RegistrerFormik></RegistrerFormik> */}

     
   {/* ejemplos  e procesos asincronos*/}
   {/* <AsycEjem></AsycEjem> */}
    {/*  <Obserbable></Obserbable> */}
   <FetchExam></FetchExam>

    {/* PROYECTO FINAL */}
   {/*   <TaskListComponent></TaskListComponent> */}
    {/*   <Father></Father> */}
    
    </div>
  );
}

export default App;
