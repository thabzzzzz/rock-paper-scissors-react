/* eslint-disable react/prop-types */
const RELATIONSHIPS = {
  rock: {
    win: "scissors",
    lose: "paper",
  },
  paper: {
    win: "rock",
    lose: "scissors",
  },
  scissors: {
    win: "paper",
    lose: "rock",
  },
};

const calcWinner = (player, opponent) => {
  const { win, lose } = RELATIONSHIPS[player];
  if (opponent === win) return "Win";
  if (opponent === lose) return "Lose";
  return "Draw";
};

const calcMessage = (player, opponent, status) => {
  if (status === "Draw") return `Both chose ${player}`;
  if (status === "Win") return `${player} beats ${opponent}`;
  return `${opponent} beats ${player}`;
};

/**
 * Shows the result
 *
 * @param {object} props
 * @param {'rock' | 'paper' | 'scissors'} props.player
 * @param {'rock' | 'paper' | 'scissors'} props.opponent
 */
export const Result = (props) => {
  const status = calcWinner(props.player, props.opponent);
  console.log(props);
  return (
    <div>
      <h1>{status}</h1>

      <p>{calcMessage(props.player, props.opponent, status)}</p>

      <button
        style={{
          background: "blue",
          color: "white",
          fontSize: "1.5rem",
        }}
        onClick={props.onReset}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};
