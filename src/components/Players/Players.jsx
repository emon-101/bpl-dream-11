import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPormise}) => {
    const players = use(playersPormise);
    console.log(players);
    return (
        <div>
            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;