import { useState } from "react";
import { useTodoContext } from "../contexts/TodoListContext";

const AddTodo = () => {
  const [ newTodo, setNewTodo ] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo !== "") {
      addTodo(newTodo);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo..."
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;