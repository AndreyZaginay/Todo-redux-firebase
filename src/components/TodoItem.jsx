import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { removeTodo } from '../API/todo.firebase';

export const TodoItem = ({ todo }) => {
  const router = useNavigate();
  const { name, body, id } = todo;

  const remove = (id) => {
    removeTodo(id);
  }
  const openTodoPage = (id) => {
    router(`todo/${id}`);
  }
    
  return (
    <>
      <h4>{ name }</h4>
      <p>{ body }</p>
      <Button variant="contained" onClick={() => openTodoPage(id)}>Todo page</Button>
      <Button variant="contained" onClick={() => remove(id)}>Remove</Button>
    </>
  )
}
