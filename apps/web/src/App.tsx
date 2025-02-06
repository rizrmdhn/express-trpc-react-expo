import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-8 p-4">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-16 hover:scale-110 transition-transform"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-16 hover:scale-110 transition-transform"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8">Vite + React</h1>
      <div className="p-6 rounded-lg bg-gray-800 max-w-md mx-auto">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md mb-4 transition-colors"
        >
          count is {count}
        </button>
        <p className="text-gray-300">
          Edit{" "}
          <code className="bg-gray-700 px-2 py-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
