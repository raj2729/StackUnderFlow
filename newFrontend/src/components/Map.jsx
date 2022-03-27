import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Link } from "react-router-dom";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "leaflet/dist/leaflet.css";
import login1 from "../assets/donationboxbg.jpg";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Icon } from "leaflet";
import "../App.css";
const position = [51.505, -0.09];
const HospitalIcon = new Icon({
  iconUrl: login1,
  iconSize: [40, 40],
});
function Map() {
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <>
      <div style={{ backgroundColor: "#87d5fa", paddingTop: "20px" }}>
        <MapContainer
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
            icon={HospitalIcon}
          >
            <Popup>Old Age Home</Popup>
            <Tooltip>Carewell Nursing Home</Tooltip>
          </Marker>
          <Link to="https://www.google.com/maps/place/Navjivan+Maternity+%26+Surgical+Nursing+Home/@19.0915758,72.8574708,13.75z/data=!4m9!1m2!2m1!1sold+age+homes+in+ville+parle!3m5!1s0x3be7c9b308424569:0x80b78f430012a7ce!8m2!3d19.0973495!4d72.8493972!15sChxvbGQgYWdlIGhvbWVzIGluIHZpbGxlIHBhcmxlkgEcb2JzdGV0cmljc19neW5lY29sb2d5X2NsaW5pYw?hl=en">
            <Marker
              position={[19.100304881548656, 72.84920310381105]}
              icon={HospitalIcon}
            >
              <Popup>Old Age Home</Popup>
              <Tooltip>Navjivan Nursing Home</Tooltip>
            </Marker>
          </Link>
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
