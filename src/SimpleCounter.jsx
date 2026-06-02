import { useState } from "react";

// e.target.value is ALWAYS a string.

export const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const maxCounter = 10;

  const handleIncrement = () => {
    // if (counter + stepValue <= maxCounter)
    setCounter(Math.min(counter + stepValue, maxCounter));
  };

  const handleDecrement = () => {
    // if (counter - stepValue > 0) setCounter(counter - stepValue);
    setCounter(Math.max(counter - stepValue, 0));
  };

  const handleReset = () => {
    setCounter(0);
    setStepValue(1);
  };

  const onChange = (e) => setStepValue(Number(e.target.value));

  const evenOdd = counter % 2 === 0 ? "Even" : "Odd";

  const disableDecrement = counter === 0;

  return (
    <>
      <div>
        Counter: {counter} - {evenOdd}
      </div>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()} disabled={disableDecrement}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
      <p>
        Step Value:
        <input type="number" value={stepValue} onChange={(e) => onChange(e)} />
      </p>
      <p>Current Step: {stepValue}</p>
    </>
  );
};
