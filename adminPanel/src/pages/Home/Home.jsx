import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import List from "../../components/List/List";
import "./home.scss";
import { AreaChart, Area } from "recharts";
import Chart from "../../components/chart/Chart";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="blogs" />
          <Widgets type="viewership" />
          {/* <Widgets type="categories" />
          <Widgets type="categories" /> */}
        </div>
        <div className="charts">
          <Chart
            aspect={2 / 1}
            title="Total Projects in last six months"
            type={AreaChart}
            typename={Area}
          />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Blogs</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
