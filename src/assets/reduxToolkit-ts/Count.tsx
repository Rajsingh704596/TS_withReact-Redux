import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  StateType,
} from "./CountSlice";
import { useState } from "react";

const Count = () => {
  const [value, setValue] = useState<number>(0);

  //send action
  const dispatch = useDispatch();

  //get data
  const count = useSelector((state: StateType) => state.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(value));
    setValue(0);
  };
  const handleDecrementByValue = () => {
    dispatch(decrementByValue(value));
    setValue(0);
  };

  return (
    <div>
      <h1>Redux Toolkit</h1>

      <div>
        <button disabled={value > 100 ? true : false} onClick={handleIncrement}>
          +
        </button>
        Count : {count}
        <button disabled={value < 0 ? true : false} onClick={handleDecrement}>
          -
        </button>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <button disabled={value > 100} onClick={handleIncrementByValue}>
        Add No for Increment
      </button>
      <button disabled={value < 0} onClick={handleDecrementByValue}>
        Subtract No for Decrement
      </button>
    </div>
  );
};

export default Count;
