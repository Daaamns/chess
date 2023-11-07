import "../styles/Case.css";

function Case({ color }) {
  return (
    <div className={"case " + color}>
      <div
        className="piece"
        style={{ backgroundImage: `url("./src/assets/bishop.svg")` }}
      ></div>
    </div>
  );
}

export default Case;
