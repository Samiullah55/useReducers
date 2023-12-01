import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count + state.step };
    case "inc":
      return { ...state, count: state.count - state.step };
    case "defCount":
      return { ...state, count: action.payload };
    case "stepCount":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
  }
};

export const DateCounter = () => {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [step, setStep] = useState(1);
  const { count, step } = state;
  const date = new Date("November 29 2023");
  date.setDate(date.getDate() + count);

  const dec = () => {
    // setCount((count) => count - step);
    dispatch({ type: "inc" });
  };

  const inc = () => {
    // setCount((count) => count + step);
    dispatch({ type: "dec" });
  };

  const defineCount = (e) => {
    dispatch({ type: "defCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    dispatch({ type: "stepCount", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
