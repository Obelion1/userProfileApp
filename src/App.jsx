import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>

        {/* This is where the active route’s component appears */}
        <Outlet />
      </main>

      <footer>
        <p className="read-the-docs">
          footer goes below each page
        </p>
      </footer>
    </>
  );
}

export default App;
