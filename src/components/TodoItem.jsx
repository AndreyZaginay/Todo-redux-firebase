import React from 'react';
import { Button } from '@mui/material';

import { removeTodo } from '../API/todo.firebase';

export const TodoItem = ({ todo }) => {
    const { name, body, id } = todo;

    const remove = (id) => {
        removeTodo(id);
    } 
    
  return (
    <>
      <p>{ name }</p>
      <p>{ id }</p>
      <Button onClick={() => remove(id)}>Remove</Button>
    </>
  )
}
