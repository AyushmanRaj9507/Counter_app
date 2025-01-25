import { useState } from "react";
import "./App.css";

function App() {
  // State to manage the counter value
  const [count, setCount] = useState(0);

  // Handlers for decrement, increment, and reset
  const decreaseHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increaseHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 gap-12 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold animate-pulse">
        Colorful Counter App
      </h1>

      {/* Counter UI */}
      <div className="bg-white p-6 rounded-lg shadow-2xl flex items-center justify-between gap-6 text-5xl text-[#344151] transform transition-all duration-500 hover:scale-105">
        {/* Decrement Button */}
        <button
          onClick={decreaseHandler}
          className="bg-gradient-to-tr from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110"
        >
          -
        </button>

        {/* Counter Value */}
        <div className="font-extrabold text-6xl animate-bounce">
          {count}
        </div>

        {/* Increment Button */}
        <button
          onClick={increaseHandler}
          className="bg-gradient-to-tr from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110"
        >
          +
        </button>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetHandler}
        className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-4 rounded-lg shadow-xl text-lg font-medium transform transition duration-300 hover:scale-110"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
