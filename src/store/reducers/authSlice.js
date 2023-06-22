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

    }
})

export default authSlice.reducer;