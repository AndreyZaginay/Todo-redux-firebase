import React, {useState} from "react";
import { Button, TextField } from "@mui/material";

import { addTodo } from "../API/todo.firebase";
import '../assets/css/todoForm';

export const TodoForm = () => {
  const [todo, setTodo] = useState({ name: '', body: ''});

  const addnewTodo = (e)  => {    
    e.preventDefault();
    if(!todo.name || !todo.body) {
      return
    }
    const newTodo = {
      ...todo
    }
    addTodo(newTodo);
    setTodo({ name: '', body: '' });
  }

  return(
    <div>    
        <form>
            <TextField 
              label="Todo name" 
              variant="outlined"
              value={todo.name}
              onChange={e => setTodo({...todo, name: e.target.value})}
              type="text" 
              placeholder="Todo name"
            />
            <TextField 
              label="Todo description" 
              variant="outlined"
              value={todo.body}
              onChange={e => setTodo({...todo, body: e.target.value})}
              type="text"
              placeholder="Todo description"
            />
            <Button variant="contained" onClick={addnewTodo}>Add todo</Button>
        </form>
    </div>
    )
}
