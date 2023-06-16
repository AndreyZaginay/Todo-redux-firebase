import React from 'react';
import { Button, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../assets/css/todoItem';
import { removeTodo, updateTodo } from '../store/actions/todosActions';

export const TodoItem = ({ todo }) => {
  const router = useNavigate();
  const { name, isComplete, id } = todo;
  const dispatch = useDispatch();

  const openTodoPage = (id) => {
    router(`todo/${id}`);
  }

  const changeTodoCompletion = () => {
    dispatch(updateTodo(id, { isComplete: !isComplete }));
  };
  
  return (
    <div className='todoItem'>
      <span>{ name }</span>
      <Checkbox type='checkbox' defaultChecked={isComplete} onChange={() => changeTodoCompletion()}/>
      <div className='btns-container'>
        <Button variant="contained" onClick={() => openTodoPage(id)}>Todo page</Button>
        <Button variant="contained" onClick={() => dispatch(removeTodo(id))}>Remove</Button>
      </div>
    </div>
  )
}
