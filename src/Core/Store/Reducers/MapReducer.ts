import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType= {
    latlng:[number,number]
}
const InitialState:InitialStateType={
    latlng:[35.700, 51.338]
}
const MapReducer = createSlice({
    name: "MapReducer",
    initialState:InitialState,
    reducers:{
        SetCoords:(state,action:PayloadAction<{ latlng: [number,number]}>)=>{
            state.latlng=action.payload.latlng
        }
    }
})
export default MapReducer.reducer;
export const {SetCoords} = MapReducer.actions;