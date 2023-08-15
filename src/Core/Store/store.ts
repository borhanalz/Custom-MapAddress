import {configureStore} from "@reduxjs/toolkit";
import Reducers from "./Reducers";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const Store=configureStore({
    reducer:Reducers
})
export type RootState=ReturnType<typeof Store.getState>
export const useAppDispatch:()=>typeof Store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;