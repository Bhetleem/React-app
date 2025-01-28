import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton'

function App() {
  const [count, setCount] = useState(0)

  const defaultToDos = [
    {text: "Hacer la compra", completed: false},
    {text: "Asentar Javascript", completed: false},
    {text: "Poner la Roomba", completed: true},
    {text: "Ir al gym", completed: true},
  ]
    

  return (
    <>
    <TodoCounter completed={3} total={5}/>
    <TodoSearch/>

    <TodoList>
      {defaultToDos.map(toDo => (
        <TodoItem 
        text={toDo.text}
        completed={toDo.completed}/>
      ))}
    </TodoList>

    <CreateTodoButton/>
    </>
  )
}

export default App
