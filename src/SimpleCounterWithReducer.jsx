const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  SET_STEP_VALUE: "set_step_value",
  RESET: "reset",
  UNDO: "undo",
  INCREMENT_BY_INTERVAL: "increment_by_interval",
  SET_INTERVAL_ID: "set_interval_id",
  STOP_INTERVAL: "stop_interval",
};

import { useState, useReducer, useEffect } from "react";
// button click
//    ↓
// dispatch action
//    ↓
// React calls reducer (action)
//    ↓
// reducer returns new state
//    ↓
// React rerenders UI

const maxCounter = 20;

const initialState = {
  counter: 0,
  stepValue: 1,
  history: [],
  intervalId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT: {
      const newCounter = Math.min(state.counter + state.stepValue, maxCounter);

      // prevent duplicate history entry
      if (newCounter != state.counter) {
        return {
          ...state,
          counter: newCounter,
          history: [...state.history, newCounter],
        };
      }

      return state;
    }

    case ACTION.DECREMENT: {
      const newCounter = Math.max(state.counter - state.stepValue, 0);
      return {
        ...state,
        counter: newCounter,
      };
    }

    case ACTION.SET_STEP_VALUE: {
      return {
        ...state,
        stepValue: action.payload,
      };
    }

    case ACTION.RESET: {
      return initialState;
    }

    case ACTION.UNDO: {
      if (state.history.length <= 1) return state;

      let newhistory = state.history.slice(0, -1);

      return {
        ...state,
        history: newhistory,
        counter: newhistory.at(-1),
      };
    }

    case ACTION.INCREMENT_BY_INTERVAL: {
      const newCount = Math.min(state.counter + 5, maxCounter);

      return {
        ...state,
        counter: newCount,
      };
    }

    case ACTION.SET_INTERVAL_ID: {
      return {
        ...state,
        intervalId: action.payload,
      };
    }

    case ACTION.STOP_INTERVAL: {
      return {
        ...state,
        intervalId: null,
      };
    }

    default:
      return state;
  }
}

export const SimpleCounterWithReducer = () => {
  //   const [counter, setCounter] = useState(0);
  //   const [stepValue, setStepValue] = useState(1);
  //   const [history, setHistory] = useState([]);
  //   const [intervalId, setIntervalId] = useState(null);

  // Hooks MUST be inside component/custom hook.
  const [state, dispatch] = useReducer(reducer, initialState);

  const { counter, stepValue, history, intervalId } = state;

  useEffect(() => {
    if (counter === maxCounter && intervalId) {
      clearInterval(intervalId);

      dispatch({
        type: "stop_interval",
      });

      console.log("Stopped");
    }
  }, [counter, intervalId]);

  const maxCounter = 20;
  const evenOdd = counter % 2 === 0 ? "Even" : "Odd";
  const disableDecrement = counter === 0;

  //   const handleIncrement = () => {
  //     // if (counter + stepValue <= maxCounter)
  //     const newCounter = Math.min(counter + stepValue, maxCounter);
  //     setCounter(newCounter);

  //     if (newCounter != counter) {
  //       // Only add to history if counter actually changed

  //       // setHistory([...history, newCounter]);
  //       // or
  //       setHistory((prev) => [...prev, newCounter]);
  //     }
  //   };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  //   const handleDecrement = () => {
  //     // if (counter - stepValue > 0) setCounter(counter - stepValue);
  //     setCounter(Math.max(counter - stepValue, 0));
  //   };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  //   const handleReset = () => {
  //     setCounter(0);
  //     setStepValue(1);
  //     setHistory([]);
  //   };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  //   const handleUndo = () => {
  //     if (history.length <= 1) return;

  //     let newhistory = history.slice(0, -1);
  //     setHistory(newhistory);
  //     setCounter(newhistory.at(-1));
  //   };

  const handleUndo = () => {
    dispatch({ type: "undo" });
  };

  //   const onChange = (e) => setStepValue(Number(e.target.value));

  const onChange = (e) => {
    dispatch({ type: "set_step_value", payload: Number(e.target.value) });
  };

  const handleStartInterval = () => {
    if (intervalId) return;
    console.log("Interval Running");

    let id = setInterval(() => {
      dispatch({ type: "increment_by_interval" });
      //   setCounter((prev) => {
      //     const newCount = Math.min(prev + 10, maxCounter);

      //     if (newCount === maxCounter) {
      //       handleStopInterval(id);
      //       //   clearInterval(id);
      //       //   setIntervalId(null);
      //       //   console.log("Stopped");
      //     }

      //     return newCount;
      //   });
    }, 1000);
    console.log(id);
    dispatch({ type: "set_interval_id", payload: id });
  };

  const handleStopInterval = (intervalId) => {
    if (!intervalId) return;
    clearInterval(intervalId);
    dispatch({ type: "stop_interval" });
    // setIntervalId(null);
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
