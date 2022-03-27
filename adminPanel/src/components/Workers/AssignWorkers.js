import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl, Select, MenuItem, Button } from "@mui/material";
import Swal from "sweetalert2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";

const AssignWorkers = () => {
  // const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [driverFirstName, setDriverFirstName] = useState("");
  // const [driverLastName, setDriverLastName] = useState("");
  const [driverMobileNumber, setDriverMobileNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [selectAll, setSelectAll] = useState(false);

  const [showCsvUploadOption, setShowCsvUploadOption] = useState(false);

  const [showLoading, setShowLoading] = useState(false);

  const handleAssignDriver = async (e) => {
    e.preventDefault();
    const mobileNumber = Number(driverMobileNumber);

    Swal.fire({
      title: `Confirm Assigning Worker to Andheri Project`,
      text: `Driver Name: Ramlal Sharma`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8a2be2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
      showLoaderOnConfirm: true,
    }).then(async (result) => {
      setShowLoading(true);
      if (result.isConfirmed) {
        try {
          // assignDriver
          const body = {
            driverFirstName,
            driverMobileNumber: mobileNumber,
            address,
            city,
          };
          Swal.fire("Driver has been assigned!", `Vehicle Tag:`, "success");
        } catch (err) {
          Swal.fire(
            `Driver is already assigned for vehicle: `,
            `Please check again.`,
            "error"
          );
        }
      }
      setShowLoading(false);
    });
  };

  // CSV ARRAY
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

  const processCSV = async (str, delim = ",") => {
    // console.log(str);
    // const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const headers = [
      "srNo",
      "city",
      "operationsManagerName",
      "operationsManagerMobileNumber",
      "operationsManagerEmailID",
      "driverBranch",
      "depot",
      "assigningManagerName",
      "assigningManagerMobileNumber",
      "assigningManagerEmailID",
      "driverID",
      "driverFirstName",
      // "driverLastName",
      "driverEmailID",
      "driverMobileNumber",
      "address",
      "vehicleTag",
      "batteryTag",
      "chargerTag",
      "accountIdOfBusiness",
    ];
    const newArray = rows.map((row) => {
      const values = row.split(delim);
      // console.log(headers);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
    // console.log(newArray);
    let isErrorInCsvFile = false;
    let allAssigned = true;
    // if (isErrorInCsvFile === false) {
    //   let allAssigned = true;
    //   newArray.map(async (row) => {
    //     if (
    //       row.city === undefined &&
    //       row.operationsManagerName === undefined &&
    //       row.operationsManagerMobileNumber === undefined &&
    //       row.operationsManagerEmailID === undefined &&
    //       row.driverBranch === undefined &&
    //       row.depot === undefined &&
    //       row.assigningManagerName === undefined &&
    //       row.assigningManagerMobileNumber === undefined &&
    //       row.assigningManagerEmailID === undefined &&
    //       row.driverID === undefined &&
    //       row.driverFirstName === undefined &&
    //       // row.driverLastName === undefined &&
    //       row.driverEmailID === undefined &&
    //       row.driverMobileNumber === undefined &&
    //       row.address === undefined &&
    //       row.vehicleTag === undefined &&
    //       row.batteryTag === undefined &&
    //       row.chargerTag === undefined &&
    //       row.accountIdOfBusiness === undefined
    //     ) {
    //       console.log(row);
    //     } else {
    //       try {
    //         const headers = {
    //           "Content-Type": "application/json",
    //           "x-auth-token": localStorage.getItem(API_TOKEN),
    //         };
    //         // assignDriver
    //         const body = {
    //           city: row.city,
    //           operationsManagerName: row.operationsManagerName,
    //           operationsManagerMobileNumber: Number(
    //             row.operationsManagerMobileNumber
    //           ),
    //           operationsManagerEmailID: row.operationsManagerEmailID,
    //           driverBranch: row.driverBranch,
    //           depot: row.depot,
    //           assigningManagerName: row.assigningManagerName,
    //           assigningManagerMobileNumber: Number(
    //             row.assigningManagerMobileNumber
    //           ),
    //           assigningManagerEmailID: row.assigningManagerEmailID,
    //           driverID: row.driverID,
    //           driverFirstName: row.driverFirstName,
    //           // driverLastName: row.driverLastName,
    //           driverEmailID: row.driverEmailID,
    //           driverMobileNumber: Number(row.driverMobileNumber),
    //           address: row.address,
    //           assetUID: "Assigned via CSV File",
    //           vehicleTag: row.vehicleTag,
    //           batteryTag: row.batteryTag,
    //           chargerTag: row.chargerTag,
    //           accountIdOfBusiness: row.accountIdOfBusiness,
    //           accountIdUsedForAssigning: currentAdmin.accountId,
    //           accountNameUsedForAssigning: currentAdmin.fullName,
    //         };
    //         console.log(body);
    //         const { data } = await axios.post("/driver/assignDriver", body, {
    //           headers,
    //         });
    //         if (data.success === true) {
    //           console.log("Success");
    //         } else {
    //           console.log("Success=true not returned");
    //           allAssigned = false;
    //         }
    //       } catch (err) {
    //         console.log(err);
    //         if (err.response.status === 404) {
    //           console.log("Error 404", err);
    //         } else if (err.response.status === 400) {
    //           console.log("Error 400", err);
    //         } else if (err.response.status === 500) {
    //           console.log("Error 500", err);
    //         }
    //         allAssigned = false;
    //         console.log("Error in Assigning Driver", err);
    //       }
    //     }
    //   });
    //   setTimeout(function () {
    //     if (allAssigned === true) {
    //       Swal.fire(
    //         "Drivers have been assigned!",
    //         `For all the vehicles`,
    //         "success"
    //       );
    //     } else {
    //       Swal.fire(`Error in assigning drivers`, `Check again`, "error");
    //     }
    //     document.getElementById("csvFile").value = "";
    //     setCsvFile("");
    //     setShowLoading(false);
    //   }, 3000);

    // }
    setTimeout(function () {
      if (allAssigned === true) {
        Swal.fire(
          "Workers have been assigned!",
          `For all the workers`,
          "success"
        );
      } else {
        Swal.fire(`Error in assigning drivers`, `Check again`, "error");
      }
      document.getElementById("csvFile").value = "";
      setCsvFile("");
      setShowLoading(false);
    }, 3000);
  };

  const submit = async () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text);
    };
    // setCsvFile();
    reader.readAsText(file);
  };

  return (
    // <div className="driverPage">
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{ color: "black" }}>
          <h3>Assign Worker</h3>
        </FormLabel>
        <RadioGroup
          aria-label="analysis"
          defaultValue="total"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="total"
            control={<Radio />}
            label="Enter Details"
            onChange={(e) => {
              setShowCsvUploadOption(false);
            }}
          />
          <FormControlLabel
            value="tomeSlots"
            control={<Radio />}
            label="Upload CSV File"
            onChange={(e) => setShowCsvUploadOption(true)}
          />
        </RadioGroup>
      </FormControl>
      <br />

      {showCsvUploadOption === false ? (
        <FormControl style={{ width: "800px" }}>
          <span
            style={{
              marginTop: "25px",
              marginLeft: "7px",
              marginBottom: "15px",
            }}
          >
            City {"  "}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </span>
          <TextField
            className="driverPageTextfield"
            variant="outlined"
            required
            placeholder="Enter City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <span
            style={{
              marginTop: "25px",
              marginLeft: "7px",
              marginBottom: "15px",
            }}
          >
            Worker Name {"  "}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </span>
          <TextField
            className="driverPageTextfield"
            variant="outlined"
            required
            placeholder="Enter Assigning Manager Name"
            onChange={(e) => {
              console.log("Hello");
              // setAssigningManagerName(e.target.value);
            }}
          />

          <span
            style={{
              marginTop: "25px",
              marginLeft: "7px",
              marginBottom: "15px",
            }}
          >
            Mobile Number {"  "}
            {/* </span> */}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </span>
          <TextField
            className="driverPageTextfield"
            variant="outlined"
            required
            placeholder="Enter Driver's Mobile Number"
            onChange={(e) => {
              setDriverMobileNumber(e.target.value);
            }}
          />
          <span
            style={{
              marginTop: "25px",
              marginLeft: "7px",
              marginBottom: "15px",
            }}
          >
            Address {"  "}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </span>
          <TextField
            className="driverPageTextfield"
            variant="outlined"
            required
            placeholder="Enter Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          {/* <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText> */}

          <span>
            <Button
              variant="contained"
              onClick={handleAssignDriver}
              style={{
                position: "relative",
                maxWidth: 300,
                marginTop: 40,
                marginBottom: 40,
                color: "white",
                backgroundColor: "#8a2be2",
              }}
            >
              Assign Worker
            </Button>
            {showLoading && (
              <CircularProgress
                style={{ marginLeft: "20px", height: "30px", width: "30px" }}
              />
            )}
          </span>
        </FormControl>
      ) : (
        <form id="csv-form">
          <input
            type="file"
            accept=".csv"
            id="csvFile"
            onChange={(e) => {
              setCsvFile(e.target.files[0]);
            }}
            style={{ marginTop: "30px" }}
            ref={(ref) => null}
          ></input>
          <br />
          <span>
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                if (csvFile) {
                  submit();
                  setShowLoading(true);
                }
              }}
              style={{
                position: "relative",
                maxWidth: 300,
                marginTop: "30px",
                marginBottom: 40,
                color: "black",
                backgroundColor: "#8a2be2",
              }}
            >
              Submit
            </Button>
            {showLoading && (
              <CircularProgress
                style={{ marginLeft: "20px", height: "30px", width: "30px" }}
              />
            )}
          </span>
          <br />
          <br />
        </form>
      )}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   vehicles: state.admin.vehicles,
// });

// export default connect(mapStateToProps, {})(Drivers);

export default AssignWorkers;
