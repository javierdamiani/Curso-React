import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed }) {
  const itemClass = completed ? "completed" : "";

  return (
    <li className={itemClass}>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
