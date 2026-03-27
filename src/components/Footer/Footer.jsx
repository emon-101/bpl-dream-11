import React from "react";
import footerLogo from "../../assets/logo-footer.png";
import { FaSquare } from "react-icons/fa";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="bg-[#040D11] pt-52 mt-80 pb-8 relative">
        <div className="absolute -top-44 w-full"><NewsLetter /></div>
      <div className="">
        <img className="mx-auto mb-16" src={footerLogo} alt="" />
        <div className="text-white/60 grid md:grid-cols-2 lg:grid-cols-3 gap-44 px-8 md:px-16 lg:px-32 mb-16">
          {/* about us */}
          <div className="">
            <h2 className="font-semibold text-lg mb-3 text-white">About Us</h2>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          {/* quick links */}
          <div className="">
            <h2 className="font-semibold text-lg mb-3 text-white">
              Quick Links
            </h2>
            <ul>
              <li className="flex gap-2 items-center">
                <FaSquare /> Home
              </li>
              <li className="flex gap-2 items-center">
                <FaSquare /> Services
              </li>
              <li className="flex gap-2 items-center">
                <FaSquare /> About
              </li>
              <li className="flex gap-2 items-center">
                <FaSquare /> Contact
              </li>
            </ul>
          </div>
          {/* Subscribe */}
          <div className="">
            <h2 className="font-semibold text-lg mb-3 text-white">Subscribe</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
            {/* email input */}
            <div className="">
              <div className="join mt-4">
                <div>
                  <label className="input join-item rounded-l-2xl text-black pr-8">
                    <input type="email" placeholder="Enter Your Email" />
                  </label>
                </div>
                <button className="join-item bg-linear-to-r from-[#FE9F30] to-[#E05C51] px-8 py-2 rounded-r-2xl text-black font-semibold text-sm">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        {/* CopyRights */}
        <div className="border-t-2 border-white/15 mb-8"></div>
        <div className="flex justify-center text-white/60"><p>@2024 Your Company All Rights Reserved.</p></div>
      </div>
    </div>
  );
};

export default Footer;
