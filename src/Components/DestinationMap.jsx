import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card';
import { ArrowReturnLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import 'leaflet/dist/leaflet.css';



const DestinationMap = (props) => {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
  const data = props.data;

  const zoom = 13;
  return (
    <div className="map-card">
      <Card>
        <Card.Body>
            <MapContainer
style={{ height: '400px', width: '100%' }}
              center={[data.latitude, data.longitude]}
              zoom={zoom}
              attributionControl={false}
            >
              <div className="map-container">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[data.latitude, data.longitude]}>
                <Popup>{data.name}</Popup>
              </Marker></div>
            </MapContainer> 
        <Card.Title>A location map of {data.title} in {data.locationname} </Card.Title>
        <Button size= "small"variant= "dark" onClick={handleClick} >
        <ArrowReturnLeft /> | Go back </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default DestinationMap;




