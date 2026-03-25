import React from "react";
import bannerImg from "../../assets/banner-main.png"

const Banner = () => {
  return (
    <div className="w-9/10 mx-auto">
      <div className="hero bg-linear-to-r from-purple-500 to-purple-300 rounded-3xl py-16">
        <div className="hero-content text-center">
          <div className="">
            <img className="mx-auto" src={bannerImg} alt="" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white my-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-2xl font-medium text-gray-600 mb-6">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border border-[#E7FE29] w-fit mx-auto px-4 py-2 rounded-2xl"><button className="px-4 py-2 bg-[#E7FE29] rounded-xl">Claim Free Credit</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
