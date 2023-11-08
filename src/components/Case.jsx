import "../styles/Case.css";

function Case({ color, type, imgUrl }) {
  return (
    <div className={"case " + color}>
      <div
        className="piece"
        // style={{ backgroundImage: `url(https://picsum.photos/536/354)` }}
        style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : "" }}
      ></div>
    </div>
  );
}

export default Case;
// style={{ backgroundImage: `${imgUrl ? `url(${imgUrl})` : ""}` }}
