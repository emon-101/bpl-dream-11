import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';

const fetchPlayers = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPormise = fetchPlayers();
  return (
    <>
        <Navbar />
        <Banner />
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players playersPormise={playersPormise} />
        </Suspense>
    </>
  )
}

export default App
