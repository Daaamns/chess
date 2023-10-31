import "..styles/Case.css";

function Case({ color }) {
  return <div style={{ backgroundColor: `${color}` }} className="case"></div>;
}

export default Case;
