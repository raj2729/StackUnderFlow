import { Button } from "@mui/material";

export const projectColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Project",
    width: 280,
    renderCell: (params) => {
      return (
        <div className="cellwithimg">
          <img className="cellimg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "location",
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
      name: "Sunview Heights",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "active",
      location: "Andheri West, Mumbai",
      time: new Date()
    },
    {
      id: 2,
      name: "Ganji Nivaas",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "pending",
      location: "Thane, Mumbai",
      time: new Date()
    },
    {
      id: 3,
      name: "Niles Apartments",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "passive",
      location: "Sagarcity, Pune",
      time: new Date()
    },
    {
      id: 4,
      name: "Caribbean B",
      img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      status: "passive",
      location: "Vile Parle, Mumbai",
      time: new Date()
    }
  ];
  