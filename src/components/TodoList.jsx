import React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <div>
        {todos.map((todo, id) => 
            <TodoItem key={id} todo={todo}/>
        )}
    </div>
  )
}
