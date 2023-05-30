import styles from './App.module.css'

import {Header} from './components/Header';

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
          <button>Criar</button>
        </form>


      </main>
      
    </div>
  )
}