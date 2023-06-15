import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import '../assets/css/todoItem';
import { remove } from '../API/todo.firebase';

export const TodoItem = ({ todo }) => {
  const router = useNavigate();
  const { name, id } = todo;

  const removeTodo = (id) => {
    remove(id);
  }
  const openTodoPage = (id) => {
    router(`todo/${id}`);
  }
    
  return (
    <div className='todoItem'>
      <span>{ name }</span>
      <div className='btns-container'>
        <Button variant="contained" onClick={() => openTodoPage(id)}>Todo page</Button>
        <Button variant="contained" onClick={() => removeTodo(id)}>Remove</Button>
      </div>
    </div>
  )
}
