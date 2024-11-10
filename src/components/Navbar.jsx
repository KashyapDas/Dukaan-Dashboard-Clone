import React from "react";
import { FaShopware } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useSetRecoilState } from "recoil";
import { NavAtoms } from "../atoms/NavAtoms";
import { IoHome } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import style from "./regular.module.css";

const Navbar = React.memo(() => {
  const setNavAtoms = useSetRecoilState(NavAtoms);
  console.log("Navbar Rendered...");

  return (
    <div
      className={`h-screen w-[50vw] absolute -translate-y-[5%] p-1 ${style.navbarBg}`}
    >
      {/* Brand Logo and remove button will be present here */}
      <div className="topSideBar w-full flex justify-between items-center mt-4">
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

      <ul className="w-full flex flex-col gap-y-2">
        <li className="w-full flex items-center p-2 text-xl">
          <IoHome className="font-semibold" />
          <span className="ml-2 font-bold">Dashboard</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <CiForkAndKnife className="font-semibold" />
          <span className="ml-2 font-bold">Orders</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <TbTruckDelivery className="font-semibold" />
          <span className="ml-2 font-bold">Delivery</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <MdProductionQuantityLimits className="font-semibold" />
          <span className="ml-2 font-bold">Products</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <SiGoogleanalytics className="font-semibold" />
          <span className="ml-2 font-bold">Analytics</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <RiDiscountPercentFill className="font-semibold" />
          <span className="ml-2 font-bold">Discounts</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <IoIosPeople className="font-semibold" />
          <span className="ml-2 font-bold">Audiences</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <IoIosColorPalette className="font-semibold" />
          <span className="ml-2 font-bold">Appereances</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <MdElectricBolt className="font-semibold" />
          <span className="ml-2 font-bold">Plugins</span>
        </li>
        <li className="w-full flex items-center p-2 text-xl">
          <IoSettingsSharp className="font-semibold" />
          <span className="ml-2 font-bold">Settings</span>
        </li>
      </ul>
    </div>
  );
});

export default Navbar;
