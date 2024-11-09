import React from "react";
import { FaShopware } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useSetRecoilState } from "recoil";
import { NavAtoms } from "../atoms/NavAtoms";

const Navbar = React.memo(() =>{
  const setNavAtoms = useSetRecoilState(NavAtoms);
  console.log("Navbar Rendered...");

  return (
    <div className="h-screen w-[50vw] absolute -translate-y-[5%] bg-slate-800 text-white p-1">
      {/* Brand Logo and remove button will be present here */}
      <div className="topSideBar w-full flex justify-between items-center">
        <h1 className="w-fit h-fit flex justify-center items-center">
          <FaShopware className="text-3xl" />
          <span className="ml-2 text-2xl font-semibold ">Dukaan</span>
        </h1>
        <ImCross
          className="text-xl cursor-pointer"
          onClick={() => setNavAtoms((prev) => !prev)}
        />
      </div>

      <hr className="w-full bg-slate-300 opacity-80 mt-3 mb-3" />

      <ul>
            <li>Dashboard</li>
            <li>Orders</li>
            <li>Delivery</li>
            <li>Products</li>
            <li>Analytics</li>
            <li>Discounts</li>
            <li>Audiences</li>
            <li>Appereances</li>
            <li>Plugins</li>
            <li>Settings</li>
            
            
      </ul>

    </div>
  );
})

export default Navbar;
