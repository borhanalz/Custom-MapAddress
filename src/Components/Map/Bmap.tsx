import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import {useAppDispatch, useAppSelector} from "../../Core/Store/store";
import {SetCoords} from "../../Core/Store/Reducers/MapReducer";
import useBmap from "./hooks/useBmap";

const Bmap = () => {
    const getCoords = useAppSelector(state=>state.MapReducer.latlng);
    const {HandelGetAddress}=useBmap();
    return (
        <>
            <div id='map' style={{height:'200px'}}>
                <MapContainer center={[35.700, 51.338]} zoom={13} scrollWheelZoom={true}>
                    <Btylelayer/>
                    <Marker position={getCoords}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                <button onClick={HandelGetAddress}>Get Address</button>
            </div>
        </>
    );
};
const Btylelayer=()=>{
    const map=useMap();
    const dispatch = useAppDispatch()
    useEffect(() => {
            map.on('move',(e:any)=>{
                dispatch(SetCoords({latlng: [e.target.getCenter().lat,e.target.getCenter().lng]}))
            })
        }, [map]);
   return <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
}
export default Bmap;
                               