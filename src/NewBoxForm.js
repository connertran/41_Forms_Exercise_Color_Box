import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ addBox }) {
  const initialState = {
    backgroundColor: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const backgroundId = uuid();
  const widthId = uuid();
  const heightId = uuid();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { backgroundColor, width, height } = formData;
    addBox(backgroundColor, width, height);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={backgroundId}>Background: </label>
      <input
        id={backgroundId}
        type="text"
        name="backgroundColor"
        placeholder=" Enter Background Color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor={widthId}>Width: </label>
      <input
        id={widthId}
        type="text"
        name="width"
        placeholder=" Enter width value, e.g. 140px"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor={heightId}>Height: </label>
      <input
        id={heightId}
        type="text"
        name="height"
        placeholder=" Enter height value, e.g. 240px"
        value={formData.height}
        onChange={handleChange}
      />
      <button type="submit">Add box!</button>
    </form>
  );
}

export default NewBoxForm;
