import * as React from 'react';
// CSS:
import styles from './TaskForm.module.css';

export interface ITaskFormProps {
  btnText: string;
}

export const TaskForm = ({ btnText }:ITaskFormProps) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo:</label>
        <input type="text" name='title' placeholder='Título da tarefa' />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificuldade">Dificuldade:</label>
        <input type="text" name='dificuldade' placeholder='Dificuldade' />
      </div>
      <input type="submit" value={btnText} />
      
    </form>
  );
}
