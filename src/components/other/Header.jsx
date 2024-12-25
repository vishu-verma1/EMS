import React from 'react';

const Header = ({data}) => {
  
const logOut = () => {
  localStorage.setItem("loggedInUser", ""); 
  window.location.reload();
};

  return (
    <div className="bg-transparent p-5">
      <div className="flex items-center justify-between bg-transparent text-white">
        <h1 className="text-sm sm:text-xl md:text-2xl bg-transparent font-medium">
          Hello <br />
          <span className="font-semibold bg-transparent text-lg sm:text-3xl md:text-4xl"> {data?.name || "Guest"}👋🏻</span>
        </h1>
        <button onClick={logOut}
          className="bg-red-600 px-3 sm:px-5 py-2 sm:py-3 rounded text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-red-700 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
