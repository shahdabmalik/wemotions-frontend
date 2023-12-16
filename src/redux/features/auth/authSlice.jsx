import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoggedIn: false,
    authDialog: false,
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
        },
        SET_AUTH_DIALOG(state, action) {
            state.authDialog = action.payload
        }
    }
});

export const { SET_LOGIN, SET_USER, SET_AUTH_DIALOG } = authSlice.actions

export default authSlice.reducer