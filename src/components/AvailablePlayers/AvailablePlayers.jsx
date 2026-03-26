import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ players, setCoins, coins, setSelectedPlayer, selectedPlayer }) => {

  return (
    <div className="mb-10">
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
            players.map(player => <AvailablePlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coins={coins} setCoins={setCoins} key={player.playerName} player={player} />)
        }
      </div>
    </div>
  );
};

export default AvailablePlayers;
