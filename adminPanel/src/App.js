import "./App.css";
import Home from "./pages/Home/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/list/List";
import ListProject from "./pages/list/ListProject";
import Notification from "./pages/Notification/Notification";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { useNavigate } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import { userInputs, BlogInputs } from "./pages/FormSource";
import Blogs from "./pages/allBlogs/Blogs";
import Statistics from "./pages/Statistics/Statistics";
import Chatbot from "./components/Chatbot";
import HindiHome from "./pages/Home/HindiHome"
import Logistics from "./pages/Logistics";
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
            <Route path="blogs">
              <Route index element={<List />} />
              <Route path=":blogId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={BlogInputs} title="Add Blog" />}
              />
            </Route>
            <Route path="logistics" element={<Logistics />} />
          </Routes>
          <Chatbot />
        </div>
    </div>
  );
}

export default App;
