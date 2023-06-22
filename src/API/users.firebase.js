import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebase";

const usersCollectionRef = collection(db, 'users');

const docRef = (id) => {
    return doc(db, 'users', id);
}

export const getUsers = async () => {
    const usersSnapshot = await getDocs(usersCollectionRef);
    return usersSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
}

// export const getUsers = () => {
//     return getDocs(usersCollectionRef).then(snapshot => snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
// }

export const getUserByEmail = async (email) => {
    if (!email) {
        return;
    }
    const userEmail = query(usersCollectionRef, where('email', '==', email));
    const { docs } = await getDocs(userEmail);
    const [userWithEmail] = docs;
    if (!userWithEmail) {
        return;
    }
    return {id: userWithEmail.id, ...userWithEmail.data()};
}

export const createUser = async (user) => {
    return await addDoc(usersCollectionRef, user).then(docRef => docRef.id);
}

export const getUserById = async (id) => {
    return getDoc(docRef(id));
}