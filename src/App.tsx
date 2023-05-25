import React, { useState } from 'react';
// COMPONENTS:
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from '../src/components/TaskList';
// CSS:
import styles from './App.module.css';

// INTERFACE:
import { ITask } from './interfaces/Taks';


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
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
      />
     </main>
     <Footer />
      
    </div>
  );
}

export default App;
