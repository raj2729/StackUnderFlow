import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
// import Footer from "./Footer";
import Avatar from "@material-ui/core/Avatar";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Card } from "@mui/material";
const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(srno, avatar, name, points, badge, payment) {
  return { srno, avatar, name, points, badge, payment };
}

const rows = [
  createData("1", "RS", "Raj Sanghavi", "2100", "gold", "Payment"),
  createData("2", "VP", "Vidhish Panchal", "2000", "gold", "Payment"),
  createData("3", "AA", "Adnan Ahmed", "2000", "gold", "Payment"),
  createData("4", "BS", "Burhan Sawliwala", "1800", "gold", "Payment"),
  createData("5", "TA", "Thakur Avnod", "1700", "silver", "Payment"),
  createData("6", "TR", "Tripur Rashi", "1600", "silver", "Payment"),
  createData("7", "UV", "Urvashi Vaani", "1500", "silver", "Payment"),
];
const FundDonation = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <Navbar />
      <div
        style={{
          backgroundColor: "#87d5fa",
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <div style={{ margin: "40px" }}>
        <h1>Donation for Workers' kids</h1>
        <br />
          <Card>
            <div style={{margin:"10px"}}>
            <br />
              <h1>SunView Heights</h1>
              <h4 style={{textAlign:"left", marginLeft:"40px"}}>About : </h4>
              <p style={{textAlign:"left", marginLeft:"40px", width:"40%"}}>This is a project based in Andheri East, Mumbai. It is a scyscraper, with more than 80 floors. It is a very big project.</p>
            <img style={{width:"30%", borderRadius:"30px", boxShadow:"5px 5px 25px 5px grey", float:"right", position:"relative", bottom:"90px", right:"100px"}} src="https://media.istockphoto.com/photos/delivering-quality-construction-for-a-quality-lifestyle-picture-id1297780288?b=1&k=20&m=1297780288&s=170667a&w=0&h=NDdDs9BBGULLwYUDUt1AjIOroHuwmFY9N6ZEDAYV7sE=" alt="img" />
            </div>
            <h4 style={{textAlign:"left", marginLeft:"48px"}}>Location : Andheri East</h4>
            <br />
            <Button color="primary" variant="contained" style={{textAlign:"left", position:"relative", right:"200px"}}>Pay Amount</Button>
          </Card>

<br />
          <Card>
            <div style={{margin:"10px"}}>
            <br />
              <h1>Ganji Niwas</h1>
              <h4 style={{textAlign:"left", marginLeft:"40px"}}>About : </h4>
              <p style={{textAlign:"left", marginLeft:"40px", width:"40%"}}>This is a project based in Andheri East, Mumbai. It is a scyscraper, with more than 80 floors. It is a very big project.</p>
            <img style={{width:"30%", borderRadius:"30px", boxShadow:"5px 5px 25px 5px grey", float:"right", position:"relative", bottom:"90px", right:"100px"}} src="https://media.istockphoto.com/photos/delivering-quality-construction-for-a-quality-lifestyle-picture-id1297780288?b=1&k=20&m=1297780288&s=170667a&w=0&h=NDdDs9BBGULLwYUDUt1AjIOroHuwmFY9N6ZEDAYV7sE=" alt="img" />
            </div>
            <h4 style={{textAlign:"left", marginLeft:"48px"}}>Location : Andheri East</h4>
            <br />
            <Button color="primary" variant="contained" style={{textAlign:"left", position:"relative", right:"200px"}}>Pay Amount</Button>
          </Card>
        </div>
        {/* <Footer /> */}
      </div></div></div>
    </>
  );
};

export default FundDonation;