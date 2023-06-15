import React, {useState} from "react";
import { Button, TextField } from "@mui/material";

import '../assets/css/todoForm';
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todosActions";

export const TodoForm = () => {
  const [todo, setTodo] = useState({ name: '', body: ''});
  const dispatch = useDispatch();

  const addnewTodo = (e)  => {    
    e.preventDefault(); 
    if(!todo.name || !todo.body) {
      return;
    }
    const newTodo = {
      ...todo
    }
    dispatch(addTodo(newTodo))
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
