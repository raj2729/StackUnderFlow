import React from "react";
import "./features.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Tota</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={66} text={"70%"} strokeWidth={4} />
        </div>
        <p className="title">Total Funds genereted in this week</p>
        <p className="desc">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          veritatis,{" "}
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <ExpandLessIcon fontSize="false" />
              <div className="resultAmount">124</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
