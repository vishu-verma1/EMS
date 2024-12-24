import React from 'react';

const TaskListNumber = () => {
  return (
    <div className="flex flex-wrap justify-between mt-10 gap-5 text-white">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-[#222831] rounded-xl py-5 px-8 w-full xs:w-[48%] sm:w-[45%] lg:w-[22%] text-center"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold">0</h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-medium">New Task</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
