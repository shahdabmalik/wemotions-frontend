import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        }
    }
});

export const { SET_LOGIN } = authSlice.actions

export default authSlice.reducer