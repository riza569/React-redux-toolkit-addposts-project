import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incremenByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const [amount, setAmount] = useState(1);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetAll}>Reset</button>

        <input
          type="number"
          value={amount}
          placeholder="enter amount"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        ></input>

        <button onClick={() => dispatch(incremenByAmount(amount))}>
          incremenByAmount
        </button>
      </div>
    </div>
  );
};

export default Counter;
