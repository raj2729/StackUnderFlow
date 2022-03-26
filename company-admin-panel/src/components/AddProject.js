import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "50%",
    border: "3px solid black",
    // borderRadius: "5%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
}));

export default function AddProject() {
  const classes = useStyles();
  return (
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
            label="Enter Number of Workers requiredt"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} className={classes.item}>
          // Map daal yaha Raj
        </Grid>
        <Grid item xs={12} className={`${classes.item} ${classes.centerMe}`}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
