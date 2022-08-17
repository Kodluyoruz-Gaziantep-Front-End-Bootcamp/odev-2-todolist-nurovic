import React, {useEffect, useState} from 'react'
import './App.css'
import Form from './components/Form'
import Todos from './components/Todos'

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const[input, setInput] = useState('')
  const[todos, setTodos] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
    <div className='App'>
      <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      />
      <Todos 
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  )
}

export default App
