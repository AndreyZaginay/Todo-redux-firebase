import React from 'react';
import { removeTodo } from '../API/todo.firebase';

export const TodoItem = ({ todo }) => {
    const { name, body, id } = todo;

    const remove = (id) => {
        removeTodo(id)
    } 
    
  return (
    <>
        <p>{ name }</p>
        <button onClick={() =>remove(id) }>Remove</button>
    </>
  )
}
