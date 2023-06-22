import { createUser, getUserByEmail } from "./users.firebase"

export const login = async (credentials) => {
    const user = await getUserByEmail(credentials.email);
    if (user && user.pass === credentials.pass) {
        return user;
    }
    return Error('Wrong email or password');
}

export const register = async (credentials) => {
    const user = await getUserByEmail(credentials.email);
    if (user) {
        return Error('User already exists');
    }
    return await createUser(credentials)
}