import { useState } from "react";
import { Select } from "./App.Select";
import { Result } from "./App.Result";

export const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);

  const opponentCalc = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setOpponentChoice(opponentCalc());
  };

  const handleReset = () => {
    setPlayerChoice(null);
    setOpponentChoice(null);
    console.log("handlereset test");
  };

  if (playerChoice && opponentChoice) {
    return (
      <Result
        player={playerChoice}
        opponent={opponentChoice}
        onReset={handleReset}
      />
    );
  }

  return <Select onPlayerSelect={handlePlayerChoice} />;
};
