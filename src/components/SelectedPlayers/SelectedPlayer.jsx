import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const SelectedPlayer = ({playerCard,sendData}) => {
    const {playerName, battingStyle, playerImage} = playerCard;

    return (
        <div>
            <div className="flex justify-between items-center p-6 rounded-2xl border border-gray-400 mb-6">
                <div className="flex items-center gap-4">
                    <img className='w-24 h-24 object-cover rounded-2xl' src={playerImage} alt="" />
                    <div className="">
                        <h3 className='font-semibold text-2xl'>{playerName}</h3>
                        <p className='text-gray-500'>{battingStyle}</p>
                    </div>
                </div>
                <div className="">
                    <button className='cursor-pointer' onClick={()=> sendData(playerCard)}><RiDeleteBin5Line className='text-red-600' /></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;