import React from 'react';

const TaskListNumber = ({data}) => {
  return (
    <div className="flex flex-wrap justify-between mt-10 gap-5 text-white">
      
         
        <div
          className="bg-[#222831] rounded-xl py-5 px-8 w-full xs:w-[48%] sm:w-[45%] lg:w-[22%] text-center"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold">{data.tasksCount.newTask}</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-medium">New task</h3>
        </div>
      

        <div
          className="bg-[#222831] rounded-xl py-5 px-8 w-full xs:w-[48%] sm:w-[45%] lg:w-[22%] text-center"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold">{data.tasksCount.completed}</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-medium">Completed task</h3>
        </div>



        <div
          className="bg-[#222831] rounded-xl py-5 px-8 w-full xs:w-[48%] sm:w-[45%] lg:w-[22%] text-center"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold">{data.tasksCount.active}</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-medium">Accepted Task</h3>
        </div>



        <div
          className="bg-[#222831] rounded-xl py-5 px-8 w-full xs:w-[48%] sm:w-[45%] lg:w-[22%] text-center"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold">{data.tasksCount.failed}</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-medium">Failed task</h3>
        </div>

        
      



    </div>
  );
};

export default TaskListNumber;
