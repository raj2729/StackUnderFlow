import "./App.css";
import Home from "./pages/Home/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/list/List";
import ListProject from "./pages/list/ListProject";
import ListInventory from "./pages/list/ListInventory";
import Notification from "./pages/Notification/Notification";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { useNavigate } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import { userInputs, BlogInputs } from "./pages/FormSource";
import Blogs from "./pages/allBlogs/Blogs";
import Statistics from "./pages/Statistics/Statistics";
import Chatbot from "./components/Chatbot";
import Workers from "./components/Workers/Workers";
import Attendance from "./components/Attendance";
import ImgToTxt from "./components/imgtotext/ImgToTxt";
// import Dashboard from "./components/adminPanelCompany/Dashboard";
import LeaderBoard from "./pages/LeaderBoard";
import FundDonation from "./pages/FundDonation";
import HindiHome from "./pages/Home/HindiHome";
import Logistics from "./pages/Logistics";
import AssignTasks from "./pages/AssignTasks";
import SendReminder from "./pages/SendReminder";
function App() {
  const navigate = useNavigate();
  const alanKey =
    "cfdac5b36d0a78de9cd6709b0a7e592e2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "login") {
          navigate("/login");
        } else if (command === "signup") {
          navigate("/signup");
        } else if (command === "home") {
          navigate("/");
        } else if (command === "maps") {
          navigate("/map");
        } else if (command === "blogs") {
          navigate("/blogs");
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="notification" element={<Notification />} />
            <Route path="Statistics" element={<Statistics />} />
            <Route path="allblogs" element={<Blogs />} />
            <Route path="assignWorkers" element={<Workers />} />
          </Route>
          <Route path="/hin" element={<HindiHome />} exact />
          {/* <Route path="/hin">
              <Route index element={<HindiHome />} />
              <Route path="login" element={<Login />} />
              <Route path="notification" element={<Notification />} />
              <Route path="Statistics" element={<Statistics />} />
              <Route path="allblogs" element={<Blogs />} />
            </Route> */}
          <Route path="users">
            <Route index element={<List />} />

            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add users" />}
            />
          </Route>
          <Route path="projects">
            <Route index element={<ListProject />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add users" />}
            />
          </Route>
          <Route path="inventory">
            <Route index element={<ListInventory />} />

            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add users" />}
            />
          </Route>
          <Route path="attendance">
            <Route index element={<Attendance />} />

            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add users" />}
            />
          </Route>
          <Route path="imagetotext">
            <Route index element={<ImgToTxt />} />

            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add users" />}
            />
          </Route>
          {/* <Route path="dashboard">
            <Route index element={<Dashboard />} />

            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add users" />}
            />
          </Route> */}
          <Route path="blogs">
            <Route index element={<List />} />
            <Route path=":blogId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={BlogInputs} title="Add Blog" />}
            />
          </Route>
          <Route path="leaderboard" exact element={<LeaderBoard />} />
          <Route path="fundDonation" exact element={<FundDonation />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="assignTasks" element={<AssignTasks />} />
          <Route path="sendReminder" element={<SendReminder />} />
        </Routes>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
