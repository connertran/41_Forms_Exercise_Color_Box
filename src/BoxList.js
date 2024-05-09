import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

function BoxList() {
  const initialState = [];
  const [boxes, setBoxes] = useState(initialState);
  const addBox = (backgroundColor, width, height) => {
    const id = uuid();
    setBoxes((boxes) => [...boxes, { backgroundColor, width, height, id }]);
  };
  const removeBox = (id) => {
    console.log("you clicked");
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  return (
    <>
      <h2>Box list</h2>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, backgroundColor, width, height }) => (
          <Box
            key={id}
            id={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            removeBox={removeBox}
          />
        ))}
      </div>
    </>
  );
}

export default BoxList;
