import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-10 bg-[#222831] mt-5 rounded '>
        <form className="flex flex-wrap justify-between items-center w-full px-4" >
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0">
            <div>
              <h3 className="text-sm mb-0.5">Task Title</h3>
              <input
                className=" bg-transparent py-1 px-2 text-sm w-full sm:w-4/5 outline-none rounded border-[1px] border-gray-300 mb-4"
                type="text"
                placeholder="Enter your title"
              />
            </div>

            <div>
              <h3 className="text-sm mb-0.5">Date</h3>
              <input
                className=" bg-transparent py-1 px-2 text-sm w-full sm:w-4/5 outline-none rounded border-[1px] border-gray-300 mb-4"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm mb-0.5">Assign to</h3>
              <input
                className=" bg-transparent py-1 px-2 text-sm w-full sm:w-4/5 outline-none rounded border-[1px] border-gray-300 mb-4"
                type="text"
                placeholder="Enter Employee Name"
              />
            </div>

            <div>
              <h4 className="text-sm mb-0.5">Category</h4>
              <input
                className=" bg-transparent py-1 px-2 text-sm w-full sm:w-4/5 outline-none rounded border-[1px] border-gray-300 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-full sm:w-2/5 flex flex-col items-start mb-4 sm:mb-0">
            <h3 className="text-sm mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent resize-none  border-gray-600 border-[1px] mb-4"
              cols="30"
              rows="5"
              spellCheck="true"
            ></textarea>
            <button className="bg-[#00ADB5] w-full px-3 sm:px-5 py-2 sm:py-3 rounded text-xs sm:text-sm md:text-base lg:text-lg font-semibold  hover:bg-[#369da1] transition-all">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask