import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import { useRecoilState } from "recoil";
import { NavAtoms } from "./atoms/NavAtoms";
import Overview from "./components/Overview";
import Transaction from "./components/Transaction";

function App() {

  const [navAtoms, setNavAtoms] = useRecoilState(NavAtoms);


  return (
    <div className="w-screen h-screen sm:bg-green-500 overflow-x-hidden relative">
      
      <div className="flex mt-1 h-fit items-center">
        {/* Hamburg Menu */}
        <div className="sidebar h-fit w-fit">
          <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={()=>setNavAtoms(prev=>!prev)} />
        </div>
        {/* Search Bar will appear here */}
        <div className="searchBar m-auto">
          <input type="search" placeholder="Search Features, tutorials, etc." className="p-1 rounded-md border-2 border-solid border-black" />
        </div>
      </div>

      {/* Navbar Components */}
      <div 
        className={`transition-all duration-300 ease-in-out absolute -translate-y-[0.6%] ${
          navAtoms 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-full pointer-events-none'
        } h-screen`}
      >
        <Navbar />
      </div>
      {/* Overview Section */}
      <Overview/>
      {/* Transaction Section */}
      <Transaction/>
    </div>
  );
}

export default App;
