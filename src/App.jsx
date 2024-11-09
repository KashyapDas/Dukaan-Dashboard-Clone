import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="w-screen h-screen bg-red-400 sm:bg-green-500 overflow-hidden p-1">
      
      <div className="flex">
        {/* Hamburg Menu */}
        <div className="sidebar h-fit w-fit">
          <GiHamburgerMenu className="text-3xl cursor-pointer " />
        </div>
        {/* Search Bar will appear here */}
        <div className="searchBar m-auto">
          <input type="search" placeholder="Search Features, tutorials, etc." className="p-1 rounded-md" />
        </div>
      </div>


    </div>
  );
}

export default App;
