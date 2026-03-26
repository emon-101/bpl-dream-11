import React from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const AvailablePlayer = ({player}) => {
    const {playerName, playerCountry, playerType, ratting, battingStyle, bowlingStyle, price, playerImage} = player;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="">
          <img
            className="w-full h-96 object-cover"
            src={playerImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> {playerName}
          </h2>
          <div className="flex justify-between items-center mt-2">
            <p className="flex gap-2 items-center text-gray-400">
              <IoFlag /> {playerCountry}
            </p>
            <button className="badge badge-ghost font-semibold p-4">
              {playerType}
            </button>
          </div>
          <div class="divider"></div>
          <p className="font-medium mb-2">Ratting: {ratting}</p>
          <div className="flex justify-between mb-3">
            <span className="font-medium">{battingStyle}</span>
            <span className="font-medium">{bowlingStyle}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Price: ${price}</span>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
