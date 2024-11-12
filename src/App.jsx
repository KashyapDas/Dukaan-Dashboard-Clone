import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import { useRecoilState } from "recoil";
import { NavAtoms } from "./atoms/NavAtoms";
import Overview from "./components/Overview";
import Transaction from "./components/Transaction";
import Footer from "./components/footer";
import style from "./components/regular.module.css"

function App() {

  const [navAtoms, setNavAtoms] = useRecoilState(NavAtoms);


  return (
    <div className={`w-screen h-screen bg-white overflow-x-hidden relative xl:flex ${style.none}`}>
      
      <div className="flex mt-1 h-fit items-center">
        {/* Hamburg Menu */}
        <div className="sidebar h-fit w-fit xl:hidden">
          <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={()=>setNavAtoms(prev=>!prev)} />
        </div>
        {/* Search Bar will appear here */}
        <div className={`searchBar m-auto sm:w-1/2 xl:w-1/3 text-center xl:absolute xl:right-[25%] xl:top-[2%] 2xl:top-[1.56]`}>
          <input type="search" placeholder="Search Features, tutorials, etc." className="p-1 xl:p-2 rounded-md border-2 border-solid border-black w-full xl:text-lg" />
        </div>
      </div>

      {/* Navbar Components */}
      <div 
        className={`h-screen lg:h-[101.5vh] transition-all duration-300 ease-in-out absolute -translate-y-[0.6%] xl:hidden ${
          navAtoms 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-full pointer-events-none'
        } h-screen`}
      >
        <Navbar />
      </div>
      
      <div className="hidden xl:block xl:w-[20vw]">
        <Navbar />
      </div>
      <div className="xl:w-[80vw]">

        {/* Overview Section */}
        <Overview/>
        {/* Transaction Section */}
        <Transaction/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
