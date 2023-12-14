import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_USER(state, action) {
            state.user = action.payload
        },
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        }
    }
});

export const { SET_LOGIN, SET_USER } = authSlice.actions

export default authSlice.reducer