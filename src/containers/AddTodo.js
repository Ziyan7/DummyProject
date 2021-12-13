import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const AddTodo = ({ dispatch }) => {
  let input
  const todos = useSelector((state) => state.todos)
  console.log(todos);
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
        {todos.map((todo)=> 
         <li>{todo.text}</li>
      ) 
    }
      </form> 
     
    </div>
  )
}
export default connect()(AddTodo)