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
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))
    ) : (
      <p>Não há tarefas cadastradas!</p>
    )}
    </>
  );
}
