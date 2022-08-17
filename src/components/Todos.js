import React from 'react'
import './Todos.css'
const Todos = ({todos, setTodos}) => {
    const deleteTodo = (id) => {
       setTodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <div className='todos-container'>
       {
        todos && todos.map((todo) =>(
            <li className='todos-list' key={todo.id}>
                <span className='todo-title'>{todo.title}</span>
                <button onClick={() => deleteTodo(todo.id)} className='todos-delete-button'>delete</button>
            </li>
        ))
       }
       
       
    </div>
  )
}

export default Todos