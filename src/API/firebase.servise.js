import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore/lite';

import { db } from "../firebase";

export const getTodos = async () => {
    const todosSnapshot = await getDocs(collection(db, 'todos'));
    const todoList = todosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return todoList;
}

export const addTodo = async(todo) => {
   await addDoc(collection(db, 'todos'), todo);
}

export const removeTodo = async (todoId) => {
    await deleteDoc(doc(db, 'todos', todoId));
}

// export const updateTodo = async (todo) => {
//     await
// }