import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPormise = fetchPlayers();
  const [coins, setCoins] = useState(50000);
  return (
    <>
        <Navbar coins={coins} />
        <Banner />
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players playersPormise={playersPormise} coins={coins} setCoins={setCoins} />
        </Suspense>
        {/* React toastify */}
        <ToastContainer />
    </>
  )
}

export default App
