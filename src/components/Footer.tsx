import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  const game = useContext(GameContext);

  return (
    <div className="footer">
      <p className="pfooter">{game?.gameStatus}</p>
    </div>
  );
};

export default Footer;
