import { signOut } from "firebase/auth";
import { createUser, getUserByEmail } from "./users.firebase";
import { signInWithPopup } from 'firebase/auth';

import { auth, googleProvider } from '../firebase';

export const login = async (credentials) => {
    const user = await getUserByEmail(credentials.email);
    if (user && user.password === credentials.password) {
        return user;
    }
    throw new Error('Wrong email or password');}

export const register = async (credentials) => {
    const user = await getUserByEmail(credentials.email);
    if (user) {
        throw Error('User already exists');
    }
    return await createUser(credentials)
}

export const loginWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
}

export const logout = async () => {
    await signOut(auth);
}