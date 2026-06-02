import { useState } from "react";

// e.target.value is ALWAYS a string.

export const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [history, setHistory] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const maxCounter = 20;
  const evenOdd = counter % 2 === 0 ? "Even" : "Odd";
  const disableDecrement = counter === 0;

  const handleIncrement = () => {
    // if (counter + stepValue <= maxCounter)
    const newCounter = Math.min(counter + stepValue, maxCounter);
    setCounter(newCounter);

    if (newCounter != counter) {
      // Only add to history if counter actually changed

      // setHistory([...history, newCounter]);
      // or
      setHistory((prev) => [...prev, newCounter]);
    }
  };

  const handleDecrement = () => {
    // if (counter - stepValue > 0) setCounter(counter - stepValue);
    setCounter(Math.max(counter - stepValue, 0));
  };

  const handleReset = () => {
    setCounter(0);
    setStepValue(1);
    setHistory([]);
  };

  const onChange = (e) => setStepValue(Number(e.target.value));

  const handleUndo = () => {
    if (history.length <= 1) return;

    let newhistory = history.slice(0, -1);
    setHistory(newhistory);
    setCounter(newhistory.at(-1));
  };

  const handleStartInterval = () => {
    if (intervalId) return;
    console.log("Interval Running");

    let id = setInterval(() => {
      setCounter((prev) => {
        const newCount = Math.min(prev + 10, maxCounter);

        if (newCount === maxCounter) {
          handleStopInterval(id);
          //   clearInterval(id);
          //   setIntervalId(null);
          //   console.log("Stopped");
        }

        return newCount;
      });
    }, 1000);
    console.log(id);
    setIntervalId(id);
  };

  const handleStopInterval = (intervalId) => {
    if (!intervalId) return;
    clearInterval(intervalId);
    setIntervalId(null);
    console.log("Stopped");
  };

  return (
    <>
      <p>
        Counter: {counter} - {evenOdd}
      </p>

      <p>History: {history.join()}</p>
      <div className="counter">
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()} disabled={disableDecrement}>
          Decrement
        </button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleStartInterval}>Start Interval</button>
        <button onClick={() => handleStopInterval(intervalId)}>
          Stop Interval
        </button>
      </div>

      <button onClick={handleReset}>Reset</button>
      <p>
        Step Value:
        <input type="number" value={stepValue} onChange={(e) => onChange(e)} />
        {stepValue}
      </p>
      {/* <p>Current Step: </p> */}

      {maxCounter === counter && (
        <p className="success">Counter max limit reached i.e {maxCounter} </p>
      )}
    </>
  );
};
