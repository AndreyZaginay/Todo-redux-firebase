import { createUser, getUserByEmail } from "./users.firebase"

export const login = async (credentials) => {
    const user = await getUserByEmail(credentials.email);
    if (user && user.pass === credentials.pass) {
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