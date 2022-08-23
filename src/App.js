import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingf';
//import TaskListComponent from './components/conteiner/task_list';
import ContactComponentA from './components/pure/componentB';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponeneteconCont from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name= {"SANDRA"}></Greeting> */}
        {/* Componente ejemplo funcional*/}
        {/* <Greetingf name= "San"></Greetingf> */}
         {/* Componente listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
         {/* <ContactComponentA></ContactComponentA>*/}
         {/* <Ejemplo1></Ejemplo1> */}
       {/*<Ejemplo2></Ejemplo2> */}
       {/* <MicomponeneteconCont></MicomponeneteconCont>   */}
         <Ejemplo4 nombre ='sandra'>
         {/* todo esto son los prop.children    */}
          <h3>
            Contenido del props.children!!
          </h3>
         </Ejemplo4> 
      </header>
    </div>
  );
}

export default App;
