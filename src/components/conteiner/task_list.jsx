import React, {useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'; 

const TaskListComponent = () => {

    
    const defaultTask = new Task('EXAMPLE', 'Default description', false,LEVELS.NORMAL)  
        // estado del componente
        const [tasks, setasks] = useState(defaultTask);
        const [loading, setLoading] = useState(true);

    // control del ciclo de vida de un component
    useEffect(() => {
        console.log ('Modificacion de task')
        setLoading(false);
        return () => {
           console.log ('Eliminacion de task por UNMOUNT')
        };
    }, [tasks]);

        const changeCpmpleted = (id) => {
            console.log('Todo: Cambiar estado de una tarea')
        }
    return (
        <div>
            <div>
                <h1>Your taks</h1>
            </div>
            {/* TO DO for/map para renderdizar una lista */}
           <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
