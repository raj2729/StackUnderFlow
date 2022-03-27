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
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ConstructionIcon = new Icon({
  iconUrl: construction,
  iconSize: [40, 40],
});
const center = {
  lat: 19.100304881548656,
  lng: 72.84920310381105,
};

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "50%",
    border: "3px solid black",
    // borderRadcius: "5%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
  },
  item: {
    padding: theme.spacing(3),
  },
  centerMe: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: theme.spacing(2),
  },
  form: {
    alignSelf: "center",
  },
  mapBox: {},
  // dropDown: {
  //   width: "500px",
  // },
}));

var lati = 19.100304881548656;
var longi = 72.84920310381105;

function DraggableMarker() {
  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  // const [lati, setLati] = useState(19.100304881548656);
  // const [longi, setLongi] = useState(72.84920310381105);
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
      lati = markerRef.current.getLatLng().lat;
      longi = markerRef.current.getLatLng().lng;
      // setLati(markerRef.current.getLatLng().lat);
      // setLongi(markerRef.current.getLatLng().lng);
    }
  });

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

function Map() {
  const [latit, setLatit] = useState(lati);
  const [longit, setLongit] = useState(longi);
  const classes = useStyles();
  useEffect(() => {
    setLatit(lati);
    setLongit(longi);
  }, [lati, longi]);

  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  // const [lati, setLati] = useState(19.100304881548656);
  // const [longi, setLongi] = useState(72.84920310381105);
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
      lati = markerRef.current.getLatLng().lat;
      longi = markerRef.current.getLatLng().lng;
      // setLati(markerRef.current.getLatLng().lat);
      // setLongi(markerRef.current.getLatLng().lng);
    }
  });

  // <DraggableMarker />
  return (
    <>
      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}
        >
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {draggable
                ? "Marker is draggable"
                : "Click here to make marker draggable"}
            </span>
          </Popup>
        </Marker>
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
      {/* ################################################### */}
      <Grid item xs={6} className={classes.item}>
        <h3>Latitude</h3>
        <TextField
          style={{ width: "100%" }}
          // placeholder="Latitude"
          id="outlined-basic"
          // label="Latitude"
          variant="outlined"
          value={latit}
        ></TextField>
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <h3>Longitude</h3>
        <TextField
          style={{ width: "100%" }}
          // placeholder="Longitude"
          id="outlined-basic"
          // label="Longitude"
          variant="outlined"
          value={longit}
        ></TextField>
      </Grid>
      {/* ################################################## */}
    </>
  );
}
export default Map;
