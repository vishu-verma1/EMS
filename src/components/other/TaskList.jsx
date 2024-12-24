import React from 'react';

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-center gap-6 py-5 w-full mt-10"
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-[#00ADB5] p-3 h-full w-[280px] min-w-[280px] sm:w-[300px] rounded-lg flex-shrink-0"
        >
          <div className="flex items-center justify-between text-white">
            <h3 className="bg-[#393E46] px-4 py-1 rounded-lg text-xs sm:text-sm">High</h3>
            <h4 className="text-xs sm:text-sm">10 Jan 2024</h4>
          </div>
          <h2 className="text-lg sm:text-2xl font-semibold mt-5">Make a YouTube video</h2>
          <p className="text-xs sm:text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque
            repellendus quo, pariatur autem velit tenetur. Harum officia est
            impedit necessitatibus reprehenderit dignissimos, rerum labore!
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
