import React from 'react'

const CompleteTasks = ({data}) => {
  return (
    <div className="bg-[#00ADB5] p-3 h-full w-full sm:w-[280px] md:w-[350px] lg:w-[400px] rounded-lg flex-shrink-0 flex flex-col">
      <div className="flex items-center justify-between text-white">
        <h3 className="bg-[#393E46] px-4 py-1 rounded-lg text-xs sm:text-sm md:text-base">
          {data.category}
        </h3>
        <h4 className="text-xs sm:text-sm md:text-base">{data.date}</h4>
      </div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-5">
        {data.title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base mt-2 flex-grow">
        {data.description}
      </p>

      <div className="mt-5 text-white">
        <button className="bg-[#222831] py-2 px-3 text-sm md:text-base rounded w-full sm:w-auto">
          Completed
        </button>
        
      </div>
    </div>
  )
}

export default CompleteTasks