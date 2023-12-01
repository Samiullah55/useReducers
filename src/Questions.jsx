const Questions = ({ question, dispatch, answer }) => {
  const hasAnswered = answer != null;
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newanswer", payload: index })}
            key={option}
            className={`btn btn-option  ${index === answer ? "answer" : " "} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
