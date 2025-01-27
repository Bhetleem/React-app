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

  return (
    <>
    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
      <TodoItem/>
    </TodoList>

    <CreateTodoButton/>
    </>
  )
}

export default App
