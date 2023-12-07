"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-primary bg-red-300 px-4 py-2 rounded-lg mb-3"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <br />
      <button
        className="btn btn-primary bg-red-300 px-4 py-2 rounded-lg"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
