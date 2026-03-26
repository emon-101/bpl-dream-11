import { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPormise, coins, setCoins }) => {
  const players = use(playersPormise);

  const [selected, setSelected] = useState("available");

  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <div className="w-9/10 mx-auto">
      <div className="flex justify-between items-center gap-4 my-10">
        {selected === "available" ? (
          <h2 className="font-bold text-3xl">Available Plyears</h2>
        ) : (
          <h2 className="font-bold text-3xl">Selected Players ({selectedPlayer.length}/{players.length})</h2>
        )}
        <div className="">
          <button
            onClick={() => setSelected("available")}
            className={`btn ${selected === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelected("selected")}
            className={`btn ${selected === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayer.length})
          </button>
        </div>
      </div>
      {
        selected === "available" ? <AvailablePlayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coins={coins} setCoins={setCoins} players={players} /> : <SelectedPlayers coins={coins} setCoins={setCoins} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
      }
    </div>
  );
};

export default Players;
