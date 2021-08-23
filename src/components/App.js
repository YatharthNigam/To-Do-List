import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
    console.log(item);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return items.filter((item, index) => item.id !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            ></ToDoItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
