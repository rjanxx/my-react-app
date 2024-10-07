import React, { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobPoster from "./job/JobPoster";
import JobListPage from "./job/JobListPage";
import JobPost from "./job/jobPost";
import JobDetails from "./job/jobDetails";
import Signup from "./job/Signup";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <>
      <ReactNotifications />
      <Router>
        <Routes>
          <Route path="/" element={<JobPoster />} />
          <Route path="/jobList" element={<JobListPage />} />
          <Route path="/jobPost" element={<JobPost />} />
          <Route path="/jobDetails" element={<JobDetails />} />
          <Route path="/Register" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
