import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType= {
    latlng:[number,number],
    address:string|null,
    city:string
}
const InitialState:InitialStateType={
    latlng:[35.700, 51.338],
    address:'',
    city:''
}
const MapReducer = createSlice({
    name: "MapReducer",
    initialState:InitialState,
    reducers:{
        SetCoords:(state,action:PayloadAction<{ latlng: [number,number]}>)=>{
            state.latlng=action.payload.latlng
        },
        CoordsAddressData:(state,action:PayloadAction<{address:string,city:string}>)=>{
            state.address=action.payload.address;
            state.city=action.payload.city
        }
    }
})
export default MapReducer.reducer;
export const {SetCoords,CoordsAddressData} = MapReducer.actions;