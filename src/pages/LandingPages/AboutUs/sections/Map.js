import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "assets/images/icons/marker-icon.png";
import markerShadow from "assets/images/icons/marker-shadow.png";
import PropTypes from "prop-types";

function MapWithMarker({ lat, lng, name }) {
  const position = [lat, lng];
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <MapContainer
        center={position}
        zoom={18}
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={new Icon({ iconUrl: markerIcon, shadowUrl: markerShadow })}
        >
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

MapWithMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default MapWithMarker;
