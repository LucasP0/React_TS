import React from 'react';
// Components:
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskForm } from './components/TaskForm';
import { TaskList } from '../src/components/TaskList';
// CSS:
import styles from './App.module.css';



function App() {
  return (
    <div>
     <Header />
     <main className={styles.main}>
      <h2>O que você vai fazer?</h2>
      <TaskForm btnText='Criar Tarefa' />
      <h2>Suas Tarefas:</h2>
      <TaskList />
     </main>
     <Footer />
      
    </div>
  );
}

export default App;
