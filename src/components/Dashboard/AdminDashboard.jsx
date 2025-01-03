import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const adminDashboard = (props) => {
  return (
    <div className="p-10 bg-[#111827] h-full sm:h-screen text-white  w-screen">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default adminDashboard;
