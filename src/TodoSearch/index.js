import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      placeholder="Cortar cebolla"
    />
  );
}

export { TodoSearch };
