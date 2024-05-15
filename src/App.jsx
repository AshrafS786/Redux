import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset
} from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="m-auto container mt-5 bg-gray-300 p-10">
      <h1 className="mb-5 text-center font-bold text-3xl">
        Counter: {value}{" "}
      </h1>

      <div className="text-center mb-5">
        <button
          onClick={() => dispatch(increment())}
          className="text-green-500 border-green-400 border-2 rounded font-bold bg-transparent px-5 py-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="text-green-500 border-green-400 border-2 rounded font-bold bg-transparent px-5 py-2 ml-4"
        >
          Decrement
        </button>
        
      </div>
      <div className="text-center mb-5">
      <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="text-green-500 border-green-400 border-2 rounded font-bold bg-transparent px-5 py-2 ml-4"
        >
          IncrementBy5
        </button>
      <button
          onClick={() => dispatch(decrementByAmount(5))}
          className="text-green-500 border-green-400 border-2 rounded font-bold bg-transparent px-5 py-2 ml-4"
        >
          DecrementBy5
        </button>
      </div>
      <div className="text-center">
        <button onClick={() => dispatch(reset())}
          className="text-red-500 border-red-400 border-2 rounded font-bold bg-transparent px-5 py-2 ml-4">Reset</button>
      </div>
    </div>
  );
};

export default App;
