import { useEffect, useState } from "react";

function Timer({ dispatch }) {
  const [time, setTime] = useState(60);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const timerId = setInterval(() => setTime((time) => time - 1), 1000);

    return () => {
      clearTimeout(timerId);
      if (time === 0 || time < 0) dispatch({ type: "finish" });
    };
  }, [time, dispatch]);
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds}
      {seconds < 10 && "0"} Remaining
    </div>
  );
}

export default Timer;
