import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoggedIn: null
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        SET_ADMINUSER(state, action) {
            state.user = action.payload
        },
        SET_ADMINUSER_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        }
    }
});

export const { SET_ADMINUSER, SET_ADMINUSER_LOGIN } = adminSlice.actions

export default adminSlice.reducer