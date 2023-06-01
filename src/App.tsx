import { PlusCircle } from '@phosphor-icons/react';
import styles from './App.module.css'

import {Header} from './components/Header';
import { Task } from './components/Task';
import { useState, FormEvent, ChangeEvent } from 'react';
import { EmptyTasks } from './components/EmptyTasks';

export interface TaskType {
  checked?: boolean;
  description: string;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTask, setNewtask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, {checked: false, description: newTask}])
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewtask(event.target.value)
  }

  function changeTask(taskDescription: string) {
    const updatedItems = tasks.map((task) => {
      if (task.description === taskDescription) {
        return { ...task, checked: !task.checked }; // Altera o valor de checked
      }
      return task; // Retorna o objeto inalterado
    });
  
    setTasks(updatedItems);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.description !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  const countCheckedItems = tasks.reduce((count, task) => {
    if (task.checked) {
      return count + 1;
    }
    return count;
  }, 0);
  
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <form onSubmit={handleCreateNewTask}>
          <input
            type='text'
            name='newTask'
            placeholder='Adicionar uma nova tarefa'
            onChange={handleNewTaskChange}
            value={newTask}
          />
          <button type='submit'>
            Criar
            <PlusCircle size={20} weight='bold' />
          </button>
        </form>

        <div className={styles.tasks}>
          <header>
            <h1>Tarefas criadas <span>{tasks.length}</span></h1>
            <h1>Concluídas <span>{countCheckedItems} de {tasks.length}</span></h1>
          </header>

          <div className={styles.tasksList}>
            {tasks.length === 0 ? <EmptyTasks /> : tasks.map(task => {
              return (
                <Task 
                  key={task.description}
                  checked={task.checked}
                  description={task.description}
                  onChangeTask={changeTask}
                  onDelete={deleteTask}
                />
              )
            })}
          </div>
        </div>

      </main>
      
    </div>
  )
}