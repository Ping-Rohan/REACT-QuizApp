import { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "inc") return { ...state, count: state.count + state.step };
  if (action.type === "dec") return { ...state, count: state.count - state.step };
  if (action.type === "setStep") return { ...state, step: action.payload };
  if (action.type === "setCount") return { ...state, count: action.payload };
  if (action.type === "reset") return { count: 0, step: 1 };
}

const initialState = {
  count: 0,
  step: 1,
};

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 14 2023");
  date.setDate(date.getDate() + count.count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input type="range" min="0" max="10" onChange={defineStep} />
        <span></span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
