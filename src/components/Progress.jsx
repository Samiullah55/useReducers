import React from "react";

const Progress = ({
  dispatch,
  answer,
  points,
  index,
  numQuestions,
  maxPoints,
}) => {
  return (
    <div className="progress">
      <progress max={15} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </div>
  );
};

export default Progress;
