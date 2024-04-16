import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { toggleModal } = React.useContext(TodoContext);

  // console.log(openModal, "openModal");
  return <button onClick={toggleModal}>Agregar Todo</button>;
}

export { CreateTodoButton };
