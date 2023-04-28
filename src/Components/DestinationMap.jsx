import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card';

const DestinationMap = (props) => {
  const data = props.data;

  const zoom = 13;
  return (
    <div className="map-card">
      <Card>
        <Card.Body>
        <div className="card-container">
  <div className="map-container">
            <MapContainer
              center={[data.latitude, data.longitude]}
              zoom={zoom}
              attributionControl={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[data.latitude, data.longitude]}>
                <Popup>{data.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
          </div>
        </Card.Body>
        <Card.Title>A location map of {data.title} in {data.locationname} </Card.Title>

      </Card>
    </div>
  );
}
export default DestinationMap;




