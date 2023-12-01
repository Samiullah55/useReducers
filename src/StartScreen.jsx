import React from "react";

const StartScreen = ({ dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to React Quizz!</h2>
      <h3>15 questions in the quizz</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
