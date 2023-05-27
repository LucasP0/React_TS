import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// CSS:
import styles from './TaskForm.module.css';

// INTERFACE:
import { ITask } from '../interfaces/Taks';


export interface ITaskFormProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null;
  handleUpdate?(id: number, title: string, dificuldade: number): void;
}


export const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }:ITaskFormProps) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [dificuldade, setDificuldade] = useState<number>(0);

  useEffect(() => {
    if(task) {
      setId(task.id);
      setTitle(task.title);
      setDificuldade(task.dificuldade);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if(handleUpdate) {
    handleUpdate(id, title, dificuldade);

  } else {
    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = {id, title, dificuldade}
  
    setTaskList!([...taskList, newTask])
  
    setTitle("");
    setDificuldade(0);
  }

  }
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDificuldade(parseInt(e.target.value));
    }
  }


  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo:</label>
        <input 
        type="text" 
        name='title' 
        placeholder='Título da tarefa' 
        onChange={handleChange} 
        value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificuldade">Dificuldade:</label>
        <input 
        type="text" 
        name='dificuldade' placeholder='Dificuldade'
        onChange={handleChange}  
        value={dificuldade}
        />
      </div>
      <input type="submit" value={btnText} />
      
    </form>
  );
}
