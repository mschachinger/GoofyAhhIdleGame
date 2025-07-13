import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./Navbar.css";

const Navbar = () => {
  const game = useContext(GameContext);

  return (
    <>
      <div className="navbar">
        <p className="pnav"> Aura: {game?.aura}</p>
        <p className="pnav"> Money: {game?.money}</p>
      </div>
    </>
  );
};

export default Navbar;
