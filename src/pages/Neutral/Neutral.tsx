// This directory contains all the files that doesnt belong to Authentication. You can name the files whatever you want, I just named them a common way

import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import quazireLogo from "@/assets/quazire.png";

function Neutral() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://quazire.com/opensource" target="_blank">
          <img src={quazireLogo} className="logo quazire" alt="Quazire logo" />
        </a>
      </div>
      <h1>Vite + React + Quaizre</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="read-the-docs">
          Edit <code>src/Neutral/Neutral.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Complete ready to start React Saas starter template by{" "}
        <code>
          <a target="_blank" href="https://github.com/shoaibkh4n">
            <strong>shoaibkh4n</strong>
          </a>
        </code>
      </p>

      <p className="read-the-docs">
        Click on the Vite, React and Quazire logos to learn more
      </p>
    </>
  );
}

export default Neutral;
