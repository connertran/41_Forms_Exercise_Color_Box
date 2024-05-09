import "./Box.css";
function Box({ id, backgroundColor, width, height, removeBox }) {
  const handleRemove = () => {
    removeBox(id);
  };
  return (
    <>
      <div
        className="Box-box-div"
        id={id}
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
      <button className="Box-box-div-button" onClick={handleRemove}>
        X
      </button>
    </>
  );
}

export default Box;
