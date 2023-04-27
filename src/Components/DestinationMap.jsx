import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DestinationMap = ({ data }) => {
    const zoom = 13;
  return (
    <div className="map-container">
      {/* <MapContainer
        center={[data.latitude, data.longitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        dragging={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[data.latitude, data.longitude]}>
          <Popup>{data.name}</Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
}
 
export default DestinationMap;