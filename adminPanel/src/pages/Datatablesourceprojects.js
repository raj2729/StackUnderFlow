import { Button } from "@mui/material";

export const projectColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Project",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="cellwithimg">
            <img className="cellimg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Address",
      width: 280,
    },
    {
      field: "status",
      headerName: "Send Report",
      width: 200,
      renderCell: (params) => {
        return (
          // <div className={`cellwithstatus ${params.row.status} `}>
          //   {params.row.status}
          // </div>.
          <Button variant="contained">Send Report</Button>
        );
      },
    },

  ];
  export const projectRows = [
    {
      id: 1,
      username: "Sunview Heights",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "active",
      email: "Andheri West, Mumbai",
      age: 35,
    },
    {
      id: 2,
      username: "Ganji Nivaas",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "pending",
      email: "Thane, Mumbai",
      age: 42,
    },
    {
      id: 3,
      username: "Niles Apartments",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "passive",
      email: "Sagarcity, Pune",
      age: 45,
    },
    {
      id: 4,
      username: "Caribbean B",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "passive",
      email: "Vile Parle, Mumbai",
      age: 16,
    }
  ];
  