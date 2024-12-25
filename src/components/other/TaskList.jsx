import React from "react";
import AcceptTasks from "../TaskList/AcceptTasks";
import NewTasks from "../TaskList/newTasks";
import CompleteTasks from "../TaskList/completeTasks";
import FaildTasks from "../TaskList/faildTasks";

const TaskList = ({ data }) => {

  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-center gap-6 py-5 w-full mt-10"
    >
      {data.tasks.map((e,idx) => {
        if (e.active) {
          return <AcceptTasks key={idx} data={e} />;
        }
        if (e.newTask) {
          return <NewTasks key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompleteTasks key={idx} data={e} />;
        }

        if (e.failed) {
          return <FaildTasks key={idx} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
