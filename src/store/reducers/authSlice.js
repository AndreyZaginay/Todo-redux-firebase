import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLoading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
        },
        loginError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        registerAction(state) {
            state.isLoading = true;
        },
        registerSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
        },
        registerError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {
    loginAction,
    loginSuccess,
    loginError,
    registerAction,
    registerSuccess,
    registerError
} = authSlice.actions;

export default authSlice.reducer;