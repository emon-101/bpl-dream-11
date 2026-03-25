import React from "react";
import dollarImg from "../../assets/dollar1.png"
import navLogo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="w-9/10 mx-auto py-4">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className=""><img src={navLogo} alt="" /></a>
        </div>
        <div className="flex justify-between items-center gap-12">
          <ul className="flex gap-12 items-center text-gray-500">
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">Schedules</a></li>
          </ul>
          <button className="flex justify-between items-center gap-2 font-medium text-lg border border-gray-200 px-4 py-2 rounded-xl">
            0 Coins
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
