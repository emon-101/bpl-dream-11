import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({selectedPlayer, setSelectedPlayer, coins, setCoins}) => {
    // console.log(selectedPlayer);
    const handleDeleteSelectedPlayer = (playerCard) => {
        const filterdPlayers = selectedPlayer.filter(player => player.playerName !== playerCard.playerName);
        setSelectedPlayer(filterdPlayers);
        setCoins(coins + playerCard.price);
    }
    return (
        <div className='my-10'>
            <div className="">
                {
                    selectedPlayer.length === 0 ? 
                    <div className='h-100 flex justify-center items-center flex-col gap-2'>
                        <h2 className='text-2xl font-semibold'>No Players Selected yet</h2>
                        <p className='text-gray-600 font-medium'>Go available tab to select players</p>
                    </div>
                    :
                    selectedPlayer.map((playerCard, idx) => <SelectedPlayer key={idx} playerCard={playerCard} sendData={handleDeleteSelectedPlayer} />)
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;