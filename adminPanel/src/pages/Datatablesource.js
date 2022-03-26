export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
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
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "age",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellwithstatus ${params.row.status} `}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "John Snow",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "1snow@nothing.com",
    age: 35,
  },
  {
    id: 2,
    username: "Cersei Lannister",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "pending",
    email: "cersei@powerispower.com",
    age: 42,
  },
  {
    id: 3,
    username: "Jaime Lannister",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "passive",
    email: "Jamie@kingslayer.com",
    age: 45,
  },
  {
    id: 4,
    username: "Arya Stark",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "passive",
    email: "aryastark@bolton.com",
    age: 16,
  },
  {
    id: 5,
    username: "Daenerys Targaryen",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "Daenerys@ dracarys.com",
    age: null,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "Melisandre@gmail.com",
    age: 150,
  },
  {
    id: 7,
    username: "Ferrara",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "Clifford@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "pending",
    email: "Frances@rediffmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/10283734/pexels-photo-10283734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "active",
    email: "Roxie@gmail.com",
    age: 65,
  },
];
