import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const [userData, setUser] = useContext(AuthContext);

  return ( 

    <>
    <div className="bg-[#222831] mt-6 p-5 rounded h-[40%]  scrollbar-none">
      {/* Task Cards */}

      <div className="bg-[#393E46] mb-5 py-2 px-4 flex  justify-between items-center rounded font-semibold">
           <h2 className="text-sm sm:text-base md:text-lg w-1/5">Employee Name</h2>
           <h3 className="text-xs sm:text-sm md:text-base text-center sm:text-left w-1/5">New Tasks</h3>
           <h5 className="text-xs sm:text-sm md:text-base w-1/5">Active Tasks</h5>
           <h5 className="text-xs sm:text-sm md:text-base w-1/5">Completed</h5>
           <h5 className="text-xs sm:text-sm md:text-base w-1/5">Failed</h5>
        </div>
      
      <div className="h-[80%] overflow-auto scrollbar-none"> 
        {userData.map((employee,idx)=>{
          
          
          return <div key={idx} className="bg-[#222831] mb-5 py-2 px-4 flex flex-wrap sm:flex-nowrap border-2 border-gray-600  justify-between items-center rounded font-medium">
           <h2 className="text-sm sm:text-base md:text-lg w-1/5">{employee.name}</h2>
           <h3 className="text-xs sm:text-sm md:text-base text-center sm:text-left w-1/5">{employee.tasksCount.newTask}</h3>
           <h5 className="text-xs sm:text-sm md:text-base w-1/5">{employee.tasksCount.active}</h5>
           <h5 className="text-xs sm:text-sm md:text-base w-1/5">{employee.tasksCount.completed}</h5>
           <h5 className="text-xs sm:text-sm md:text-base w-1/5">{employee.tasksCount.failed}</h5>
          </div>
           })}
      </div>
      

      
    </div>
    </>
    
  );
};

export default AllTask 
