import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {redirect} from "react-router-dom";

type InitialStateType = {
    authenticate:boolean
}
const InitialState:InitialStateType = {
    authenticate:false
}
const AuthReducer = createSlice({
    name:'auth-reducer',
    initialState:InitialState,
    reducers:{
        Authenticated:(state,action:PayloadAction<{authenticate:boolean}>)=> {
            state.authenticate = action.payload.authenticate;
        }
    }
});
export default AuthReducer.reducer
export const {Authenticated}=AuthReducer.actions