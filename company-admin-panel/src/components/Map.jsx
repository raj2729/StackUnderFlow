// import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";

// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import "leaflet/dist/leaflet.css";
import construction from "../assets/construction.png";
// import { Card } from "@material-ui/core";
// import { Button } from "@material-ui/core";

import { Icon } from "leaflet";
import "../App.css";
// const position = [51.505, -0.09];
// const ConstructionIcon = new Icon({
//   iconUrl: construction,
//   iconSize: [40, 40],
// });
// function Map() {
//   const [value, setValue] = useState(1);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//     console.log(value);
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: "#87d5fa", paddingTop: "20px" }}>
//         <MapContainer
//           // center={[20.5937, 78.9629]}
//           center={[19.096893719743967, 72.87301867005657]}
//           zoom={13}
//           scrollWheelZoom={true}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker
//             position={[19.120961066015365, 72.85161434796963]}
//             icon={ConstructionIcon}
//           >
//             <Popup>Old Age Home</Popup>
//             <Tooltip>Carewell Nursing Home</Tooltip>
//           </Marker>
//           <Marker
//             position={[19.100304881548656, 72.84920310381105]}
//             icon={ConstructionIcon}
//           >
//             <Popup>Old Age Home</Popup>
//             <Tooltip>Navjivan Nursing Home</Tooltip>
//           </Marker>
//         </MapContainer>
//       </div>
//     </>
//   );
// }

// export default Map;

// import { useCallback, useMemo, useRef, useState } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// export default Map;
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
// import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

const center = {
  lat: 51.505,
  lng: -0.09,
};

const ConstructionIcon = new Icon({
  iconUrl: construction,
  iconSize: [40, 40],
});

function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  useEffect(() => {
    if (markerRef.current != null) {
      console.log(markerRef.current.getLatLng());
    }
  }, [markerRef.current]);

  return (
    <>
      <div>
        <MapContainer
          style={{
            height: "500px",
          }}
          // center={[20.5937, 78.9629]}
          center={[19.096893719743967, 72.87301867005657]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[19.120961066015365, 72.85161434796963]}
            icon={ConstructionIcon}
          >
            <Popup>Old Age Home</Popup>
            <Tooltip>Carewell Nursing Home</Tooltip>
          </Marker>
          <Marker
            position={[19.100304881548656, 72.84920310381105]}
            icon={ConstructionIcon}
          >
            <Popup>Old Age Home</Popup>
            <Tooltip>Navjivan Nursing Home</Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

function Map() {
  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  );
}
export default Map;
