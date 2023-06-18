import { collection, getDocs, addDoc, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore/lite';

import { db } from "../firebase";

const todosCollectionRef = collection(db, 'todos');
const docRef = (id) => {
    return doc(db, 'todos', id);
}

export const getTodos = async () => {
    const todosSnapshot = await getDocs(todosCollectionRef);
    return todosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
}   

export const getTodoById = (id) => {
    return getDoc(docRef(id));
}

export const add = async (todo) => {
    return await addDoc(todosCollectionRef, todo).then(docRef => docRef.id);
}

export const update = async (id, todo) => {
    await updateDoc(docRef(id), todo);
}

export const remove = async (todoId) => {
    await deleteDoc(docRef(todoId));
}
