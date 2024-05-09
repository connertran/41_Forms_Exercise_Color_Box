import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm() {
  const initialState = {
    backgroundColor: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(initialState);
  const backgroundId = uuid();

  return (
    <form>
      <label htmlFor={backgroundId}>Background</label>
      <input
        id={backgroundId}
        type="text"
        name="backgroundColor"
        placeholder=" Enter Background Color"
        value={formData.backgroundColor}
        // onChange={...}
      />
    </form>
  );
}

export default NewBoxForm;
