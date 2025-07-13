import { useState, useContext, useEffect } from "react";
import UnitProgressBar from "./UnitProgressBar";
import { GameContext } from "../context/GameContext";
import type { UnitData } from "../data/UnitData";

type Props = {
  data: UnitData;
};

function Unit({ data }: Props) {
  const game = useContext(GameContext);
  const unitName = data.name;
  const [unitAmount, setUnitAmount] = useState(1);
  const [unitCost, setUnitCost] = useState(data.baseCost);
  const [unitXP, setUnitXP] = useState(0);
  const [unitLevel, setUnitLevel] = useState(1);

  //audios
  var audio_err = new Audio("sounds/idle_err.mp3");
  var audio_buy = new Audio("sounds/idle_buy.mp3");

  const buyUnit = () => {
    if ((game?.money ?? 0) >= unitCost) {
      game?.setMoney(game.money - unitCost);
      setUnitAmount(unitAmount + 1);
      setUnitCost(Math.floor(unitCost * 1.3));
      game?.setGameStatus("Du hast " + unitName + " gekauft");
      audio_buy.play();
    } else {
      game?.setGameStatus(
        "Dein Broke Ass hat NICHT genug Money um " + unitName + " zu kaufen "
      );
      audio_err.play();
    }
  };

  const xpGained = 10;
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(xpGained + "XP added to " + unitName);
      if (unitXP + xpGained > 100) {
        unitXP - 100;
      }
      unitXP + xpGained;
    }, 1000);
    return () => {
      console.log("test3");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>{unitName}</h2>
      <img
        src={data.img}
        alt={unitName + " image"}
        style={{ width: "100px" }}
      />
      <p>Amount: {unitAmount}</p>
      <p>Cost: {unitCost} </p>
      <button onClick={buyUnit}>Buy</button>
      <br></br>
      <br></br>
      <UnitProgressBar />
    </>
  );
}

export default Unit;
