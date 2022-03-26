import React from "react";
import "./widgets.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ClassIcon from "@mui/icons-material/Class";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
const Widgets = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        count: false,
        link: "see all users",
        icon: (
          <AccountCircleOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "blogs":
      data = {
        title: "blogs",
        count: true,
        link: "see all blogs",
        icon: (
          <BackupTableIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "categories":
      data = {
        title: "category",
        count: false,
        link: "see all category",
        icon: (
          <ClassIcon
            className="icon"
            style={{ color: "orange", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "viewership":
      data = {
        title: "Viewership",
        count: true,
        link: "see all Viewership",
        icon: (
          <QueryStatsIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.count}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
