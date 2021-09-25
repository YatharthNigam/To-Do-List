import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(item) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
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
      {/* Going to input area and recieving the input word from it. */}
      <InputArea onAdd={handleClick} />
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
