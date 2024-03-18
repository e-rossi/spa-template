import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full h-full m-10 text-center">
      <div className="flex flex-row justify-center m-10">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-36 m-5" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-36 m-5" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className=" border-2">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
}
