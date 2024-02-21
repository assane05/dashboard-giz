import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "./Dashboard";

export default function ViewDashboard() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
