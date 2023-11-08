import "../styles/Board.css";
import "../styles/Case.css";
import Case from "./Case.jsx";

function Board() {
  const cases = [];
  const caseContenu = [];

  for (let i = 0; i < 10; i++) {
    cases[i] = [];
    caseContenu[i] = [];
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      caseContenu[i][j] = {};
    }
  }
  for (let i = 0; i < 10; i++) {
    if (i === 1) {
      caseContenu[i][2] = {
        type: "horse",
        imgUrl: "./src/assets/horse-black.svg",
      };
      caseContenu[i][1] = {
        type: "rock",
        imgUrl: "./src/assets/rock-black.svg",
      };
      caseContenu[i][3] = {
        type: "bichop",
        imgUrl: "./src/assets/bishop-black.svg",
      };
      caseContenu[i][4] = {
        type: "queen",
        imgUrl: "./src/assets/queen-black.svg",
      };
      caseContenu[i][5] = {
        type: "king",
        imgUrl: "./src/assets/king-black.svg",
      };
      caseContenu[i][6] = {
        type: "bichop",
        imgUrl: "./src/assets/bishop-black.svg",
      };
      caseContenu[i][7] = {
        type: "horse",
        imgUrl: "./src/assets/horse-black.svg",
      };
      caseContenu[i][8] = {
        type: "rock",
        imgUrl: "./src/assets/rock-black.svg",
      };
    }

    if (i === 2) {
      caseContenu[i][1] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][2] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][3] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][4] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][5] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][6] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][7] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
      caseContenu[i][8] = {
        type: "pawn",
        imgUrl: "./src/assets/pawn-black.svg",
      };
    }

    if (i === 7) {
      caseContenu[i][1] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][2] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][3] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][4] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][5] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][6] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][7] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
      caseContenu[i][8] = { type: "pawn", imgUrl: "./src/assets/pawn.svg" };
    }

    if (i === 8) {
      caseContenu[i][1] = { type: "rock", imgUrl: "./src/assets/rock.svg" };
      caseContenu[i][2] = { type: "horse", imgUrl: "./src/assets/horse.svg" };
      caseContenu[i][3] = { type: "bichop", imgUrl: "./src/assets/bishop.svg" };
      caseContenu[i][4] = { type: "king", imgUrl: "./src/assets/king.svg" };
      caseContenu[i][5] = { type: "queen", imgUrl: "./src/assets/queen.svg" };
      caseContenu[i][6] = { type: "bichop", imgUrl: "./src/assets/bishop.svg" };
      caseContenu[i][7] = { type: "horse", imgUrl: "./src/assets/horse.svg" };
      caseContenu[i][8] = { type: "rock", imgUrl: "./src/assets/rock.svg" };
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      cases[i][j] = i + j;
    }
  }
  return (
    <div className="board">
      {cases.map((ligne, i) =>
        ligne.map((col, j) => {
          if (i === 0 || i === 9 || j === 0 || j === 9) {
            return <Case color={"beige case"} key={i * 10 + j} />;
          } else {
            return (
              <Case
                color={col % 2 === 0 ? "blanc case" : "noir case"}
                type={caseContenu[i][j].type}
                imgUrl={caseContenu[i][j].imgUrl}
                key={i * 10 + j}
              />
            );
          }
        })
      )}
    </div>
  );
}

export default Board;
