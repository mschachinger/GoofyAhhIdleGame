import { createContext, useState } from "react";
import type { ReactNode } from "react";

type GameContextType = {
  money: number;
  setMoney: (value: number) => void;
  aura: number;
  setAura: (value: number) => void;
  gameStatus: string;
  setGameStatus: (value: string) => void;
};

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export function GameProvider({ children }: { children: ReactNode }) {
  const [money, setMoney] = useState(1000);
  const [aura, setAura] = useState(0);
  const [gameStatus, setGameStatus] = useState("idle");

  return (
    <GameContext.Provider
      value={{ money, setMoney, aura, setAura, gameStatus, setGameStatus }}
    >
      {children}
    </GameContext.Provider>
  );
}
