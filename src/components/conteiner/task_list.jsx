import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {


    const defaultTask1 = new Task('EXAMPLE1', ' description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('EXAMPLE2', ' description2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('EXAMPLE3', ' description3', true, LEVELS.BLOCKING)

    // estado del componente
    const [tasks, setasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // control del ciclo de vida de un component
    useEffect(() => {
        console.log('Modificacion de task')
        setLoading(false);
        return () => {
            console.log('Eliminacion de task por UNMOUNT')
        };
    }, [tasks]);


    function completeTask(task) {
        console.log('Complete this task', task);
        //buscamos el indice de la tarea
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = ! tempTask[index].completed;
        //actualizamos el estado del componenet actualiza la iteracion y la tarea
        setasks(tempTask);
    }
   
    function deletetask(task) {
        console.log('Complete this task', task);
        //buscamos el indice de la tarea
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setasks(tempTask);

    }

    function addTask(task) {
        console.log('Complete this task', task);
        //buscamos el indice de la tarea
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* card header */}
                    <div className='card-header p-3'>
                        <h5>
                            Your taks
                        </h5>
                    </div>
                    {/* card body */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>title:</th>
                                    <th scope='col'>Description:</th>
                                    <th scope='col'>priority:</th>
                                    <th scope='col'>Actions:</th>
                                </tr>
                            </thead>
                            <tbody>
                             
                                { tasks.map( (task,index) => {
                                
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            completed = {completeTask}
                                            remove = {deletetask}>
                                        </TaskComponent>
                                    )
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <TaskForm add={addTask}></TaskForm>
        </div>

    );
};

export default TaskListComponent;
