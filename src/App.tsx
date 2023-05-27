import React, { useState } from 'react';
// COMPONENTS:
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from '../src/components/TaskList';
import { Modal } from './components/Modal';

// CSS:
import styles from './App.module.css';

// INTERFACE:
import { ITask } from './interfaces/Taks';



function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null> (null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if(display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide');
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, dificuldade: number) => {
    const updatedTask: ITask = {id, title, dificuldade};


    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task 
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };


  return (
    <div>
      <Modal 
      children={
      <TaskForm 
      btnText="Edotar Tarefa"
      taskList={taskList}
      task={taskToUpdate}
      handleUpdate={updateTask}
      />} />

     <Header />

     <main className={styles.main}>
      <h2>O que você vai fazer?</h2>

      <TaskForm 
      btnText='Criar Tarefa'
      taskList={taskList}
      setTaskList={setTaskList}
       />
      <h2>Suas Tarefas:</h2>

      <TaskList
      taskList={taskList}
      handleDelete={deleteTask}
      handleEdit={editTask}
      />
     </main>
     <Footer />
    </div>
  );
}

export default App;
