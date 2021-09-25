import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
    console.log(item);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
