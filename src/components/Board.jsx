import "../styles/Board.css";
import "../styles/Case.css";
import Case from "./Case.jsx";

function Board() {
  const cases = [];

  for (let i = 0; i < 8; i++) {
    cases[i] = [];
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      cases[i][j] = i + j;
    }
  }
  return (
    <div className="board">
      {cases.map((ligne, i) =>
        ligne.map((col, j) => (
          <Case
            color={col % 2 === 0 ? "blanc case" : "noir case"}
            key={i * 8 + j}
          />
        ))
      )}
    </div>
  );
}

export default Board;
