import React from 'react'
import './Form.css'
import {v4 as uuidv4} from 'uuid'
const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (e) =>{
        setInput(e.target.value)
    }
    const onHandleForm = (e) => {
        e.preventDefault()
        setTodos([...todos, {id:uuidv4(), title: input}])
        setInput("")
    }

  return (
    <div className='container'>
        <form onSubmit={onHandleForm} className="submit-container">
            <input 
            type="text" 
            placeholder='Add new TODO . . .'
            value={input}
            required
            onChange={onInputChange}
            />
        <button className='form-button' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Form