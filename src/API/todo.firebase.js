import { collection, getDocs, addDoc, doc, deleteDoc, getDoc } from 'firebase/firestore/lite';

import { db } from "../firebase";

const todosCollectionRef = collection(db, 'todos');
const docRef = (id) => {
    return doc(db, 'todos', id);
}

export const getTodos = async () => {
    const todosSnapshot = await getDocs(todosCollectionRef);
    const todoList = todosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return todoList;
}

export const getTodoById = async (id) => {
    return await getDoc(docRef(id));
}

export const addTodo = async(todo) => {
   await addDoc(todosCollectionRef, todo);
}

export const removeTodo = async (todoId) => {
    await deleteDoc(docRef(todoId));
}
