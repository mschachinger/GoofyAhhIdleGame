import { useContext, useState } from "react";
import "./App.css";
import Unit from "./components/Unit";
import { GameContext, GameProvider } from "./context/GameContext";
import { units } from "./data/UnitData";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const game = useContext(GameContext);

  return (
    <>
      <Navbar />
      <div style={{ marginLeft: "30px", marginTop: "80px" }}>
        <h1>Goofy Ahh Idle Game</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "50%",
          }}
        >
          {units
            .filter(
              (unit) => (game?.money ?? 0) >= unit.unlockMoney || unit.unlocked
            )
            .map(
              (unit) => (
                (unit.unlocked = true), (<Unit key={unit.id} data={unit} />)
              )
            )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
//rafce
