import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss'; 
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, completed, remove}) => {

    useEffect(() => {
        
        console.log ('Tarea creada')
        return () => {
            console.log ('Tarea unmount')
        };
    }, [task]);
    // function that return a badge depending on level of the task
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>)
             case LEVELS.URGENTE:
                
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>)
            case LEVELS.BLOCKING:
                
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>)
        
            default:
                break;
        }
    }
    // function that returns icon depending on completion 
    function taskIconCompleted() {
        if (task.completed) {
            //declaramos antes con funcion anonima si no no se efecutará
            return   (<i onClick={() => completed(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>) 
        } else {
            return  (<i onClick={() => completed(task)}  className='bi-toggle-off task-action' style={{color: 'grey'}} ></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
            {/* ejecutamos la function badge*/}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>

           {taskIconCompleted()}
            <i className='bi-trash task-action' style={{color: 'tomato'}} 
            onClick={() => remove(task)}></i>

            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    //isRequired: que sea obligatorio
    task : PropTypes.instanceOf(Task).isRequired, 
    completed : PropTypes.func.isRequired,
    remove  : PropTypes.func.isRequired,
};


export default TaskComponent;
