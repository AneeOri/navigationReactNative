/*Redux logic starts here*/ 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userToken: null,
    isLoading: true,
    isSignout: false,
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        restoreToken:(state , action) => {
            state.userToken = action.payload;
            state.isLoading = false;
        },
        singIn: (state, action) => {
            state.isSignout = false;
            stete.userToken = action.payload
        },
        singOut: (state) => {
            state.isSignout = true;
            state.userToken = null;
        },
    },
});

export const {restoreToken , signIn, signOut} = authSlice.actions;
export default authSlice.reducer;