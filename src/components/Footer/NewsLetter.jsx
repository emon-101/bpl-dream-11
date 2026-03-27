import React from "react";
import shadow from "../../assets/bg-shadow.png";

const NewsLetter = () => {
  return (
    <div className="border border-white p-4 rounded-3xl w-4/5 mx-auto bg-white/20">
      <div
        className="py-22 rounded-3xl bg-white"
        style={{
          backgroundImage: `url(${shadow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center text-3xl font-bold text-black">
          Subscribe to our Newsletter
        </h1>
        <p className="text-center text-xl text-[#131313]/70 font-semibold mb-6 mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input rounded-xl py-2"
          />
          <button className="bg-linear-to-r from-[#FE9F30] to-[#E05C51] px-8 py-2 rounded-xl text-black font-semibold text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
