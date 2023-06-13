import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../API/todo.firebase';

export const TodoIdPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodoById(params.id).then(doc => setTodo({id: doc.id, ...doc.data()}));
  }, [])

  return (
    <div>
      <h1>{todo.name}</h1>
      <p>{todo.body}</p>
    </div>
  )
}
