import { PlusCircle } from '@phosphor-icons/react';
import styles from './App.module.css'

import {Header} from './components/Header';
import { Task } from './components/Task';

export function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <form>
          <input
            type='text'
            name='newTask'
            placeholder='Adicionar uma nova tarefa'
          />
          <button type='submit'>
            Criar
            <PlusCircle size={20} weight='bold' />
          </button>
        </form>

        <div className={styles.tasks}>
          <header>
            <h1>Tarefas criadas <span>5</span></h1>
            <h1>Concluídas <span>2 de 5</span></h1>
          </header>

          <div className={styles.tasksList}>
            <Task />
            <Task />
            <Task />
          </div>
        </div>

      </main>
      
    </div>
  )
}