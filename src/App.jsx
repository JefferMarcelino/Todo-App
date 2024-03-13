import { useState, useEffect } from "react";
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import TodoProvider from "./contexts/TodoListContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  )
}

export default App;