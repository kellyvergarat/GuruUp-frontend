import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Layout from "./pages/Layout";
import ChatPage from "./pages/ChatPage";
import StoragePage from "./pages/StoragePage";
import UploadPage from "./pages/UploadPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* element={<Layout/>} */}
          <Route path="chat" element={<ChatPage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
