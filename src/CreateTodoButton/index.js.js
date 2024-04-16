import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return <button onClick={() => alert("le diste click")}>Agregar Todo</button>;
}

export { CreateTodoButton };
