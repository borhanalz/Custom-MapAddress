import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import {useAppDispatch, useAppSelector} from "../../Core/Store/store";
import {SetCoords} from "../../Core/Store/Reducers/MapReducer";
import useBmap from "./hooks/useBmap";
import { Form } from 'antd';
import { OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';

const Bmap = () => {
    const getCoords = useAppSelector(state=>state.MapReducer.latlng);
    const SearchField = () => {
		const searchControl = new (SearchControl as any)({
			provider: new OpenStreetMapProvider({
				params: {
					'accept-language': 'ir', // render results in Dutch
					countrycodes: 'ir', // limit search results to the Netherlands
					addressdetails:1, // include additional address detail parts
				},
			}),
			showMarker: false,
			showPopup: true,
			autoClose: true,
			retainZoomLevel: false,
			animateZoom: true,
			keepResult: false,
			searchLabel: 'جستجو...'
		});
		const map = useMap();

		useEffect(():any => {
			map.addControl(searchControl);
			return () => map.removeControl(searchControl);
		}, [map]);

		return null;
	};
    return (
        <>
            <div id='map' style={{height:'200px'}}>
                <Form>
                <MapContainer center={[35.700, 51.338]} zoom={13} scrollWheelZoom={true}>
                    <Btylelayer/>
                    <Marker position={getCoords}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <SearchField/>
                </MapContainer>
                </Form>
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
                               