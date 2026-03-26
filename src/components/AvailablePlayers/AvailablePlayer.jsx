import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { toast } from "react-toastify";

const AvailablePlayer = ({player, setCoins, coins, setSelectedPlayer, selectedPlayer}) => {
    const [isSelected, setIsSelected] = useState(false);
    const {playerName, playerCountry, playerType, ratting, battingStyle, bowlingStyle, price, playerImage} = player;

    const handleChooseplayer = ()=> {
        if(coins < price) {
            toast.error("Insufficient balance to buy players!");
            return;
        }
        toast.success(`${playerName} is sold`);
        setIsSelected(true);
        setCoins(coins - price);
        setSelectedPlayer([...selectedPlayer, player]);
    }
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
          <div className="divider"></div>
          <p className="font-medium mb-2">Ratting: {ratting}</p>
          <div className="flex justify-between mb-3">
            <span className="font-medium">{battingStyle}</span>
            <span className="font-medium">{bowlingStyle}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Price: ${price}</span>
            <button onClick={handleChooseplayer} className={`btn`} disabled={isSelected}>{isSelected ? 'Selected': 'Choose Player'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
