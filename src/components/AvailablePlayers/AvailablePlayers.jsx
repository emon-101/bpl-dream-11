import React from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="w-9/10 mx-auto my-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
            players.map(player => <AvailablePlayer key={player.playerName} player={player} />)
        }
      </div>
    </div>
  );
};

export default AvailablePlayers;
