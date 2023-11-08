import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [boardState, setBoardState] = useState([]);

  return (
    <div>
      <Board />
    </div>
  );
}

export default App;
