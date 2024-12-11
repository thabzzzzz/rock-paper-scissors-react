export const Select = ({ onPlayerSelect }) => {
  return (
    <div>
      <h1>Choose your move</h1>
      <button onClick={() => onPlayerSelect("rock")}>Rock</button>
      <button onClick={() => onPlayerSelect("paper")}>Paper</button>
      <button onClick={() => onPlayerSelect("scissors")}>Scissors</button>
    </div>
  );
};
