import React, { Children } from "react";
import { TodoContext } from "../TodoContext";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(<div className="ModalBackground">{children}</div>, document.getElementById("modal"));
}
export { Modal };
