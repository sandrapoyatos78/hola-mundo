import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss'; 

const TaskComponent = ({task}) => {

    useEffect(() => {
        
        console.log ('Tarea creada')
        return () => {
            console.log ('Tarea unmount')
        };
    }, [task]);
    return (
        <div>
            <h2 className='task-name'>
               NOMBRE: { task.name }
            </h2>
            <h3>
               DESCRIPTION: { task.description }
            </h3>

            <h4>
               NIVEL: { task.level }
            </h4>
            <h5>
               this task is : { task.completed ? 'COMPLETED': 'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task)
};


export default TaskComponent;
