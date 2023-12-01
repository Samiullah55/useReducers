const Finish = ({ points, maxPoints, highscore, dispatch }) => {
  return (
    <>
      <div className="result">
        <p>
          You scored {points} out of {maxPoints}
        </p>
        <p>(HighScore:{highscore} points)</p>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
};

export default Finish;
