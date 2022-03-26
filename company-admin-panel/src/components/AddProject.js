import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Select,
  TextField,
  Typography,
  MenuItem,
} from "@material-ui/core";

import { contractorData } from "./data";
import Map from "./Map";

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

export default function AddProject() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(contractorData);
  }, [contractorData]);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Typography variant="h5" className={classes.title}>
          Enter Project Details
        </Typography>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={12} className={classes.item}>
            <TextField
              style={{ width: "100%" }}
              placeholder="Enter Project Name"
              id="outlined-basic"
              label="Enter Project Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <TextField
              style={{ width: "100%" }}
              placeholder="Enter Budget"
              id="outlined-basic"
              label="Enter Budget"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <TextField
              style={{ width: "100%" }}
              placeholder="Enter Number of Workers required"
              id="outlined-basic"
              label="Enter Number of Workers required"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} className={`${classes.item} ${classes.centerMe}`}>
            <FormControl variant="outlined" style={{ width: "400px" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Contractor
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Age"
              >
                {data.map((each, key) => {
                  return (
                    <MenuItem key={key} value={each.name}>
                      {each.name}
                    </MenuItem>
                  );
                })}
                {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <Box style={{ marginTop: "-100px" }}>
              <Map />
            </Box>
          </Grid>
          <Grid item xs={12} className={`${classes.item} ${classes.centerMe}`}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                alert("Submitted");
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
