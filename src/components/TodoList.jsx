import React from 'react'

export const TodoList = ({ todos }) => {
  return (
    <div>
        {todos.map((todo, id) => 
            <div key={id}>{todo.name}</div>
        )}
    </div>
  )
}
