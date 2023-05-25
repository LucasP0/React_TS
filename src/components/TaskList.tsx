import * as React from 'react';
// INTERFACE:
import { ITask } from '../interfaces/Taks';

// CSS:
import styles from './TaskList.module.css';


export interface ITaskListProps {
  taskList: ITask[]
}

export const TaskList = ({taskList}: ITaskListProps) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id} className={styles.task}>
         <div className={styles.details}>
          <h4>{task.title}</h4>
          <p>Dificuldade: {task.dificuldade} </p>
          </div> 
          <div className={styles.actions}>
            <i className='bi bi-pencil'></i>
            <i className='bi  bi-trash'></i>
          </div>
        </div>
      ))
    ) : (
      <p>Não há tarefas cadastradas!</p>
    )}
    </>
  );
}
