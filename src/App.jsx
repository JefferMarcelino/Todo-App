import { useState, useContext, useEffect } from "react";
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"


if (!localStorage.getItem("tasks")) {
  var localTodos = ""
} else {
  var localTodos = JSON.parse(localStorage.getItem("tasks"))
}

function App() {

  const [ todos, setTodos ] = useState(localTodos)

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id === id ? false : todo)
    
    localStorage.clear()
    localStorage.setItem("tasks", JSON.stringify(newTodos))
    
    setTodos(todos.filter(todo => todo.id === id ? false : todo))
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo todos={ todos } setTodos={ setTodos }/>
        <TodoList todos={ todos } deleteTodo={ deleteTodo }/>
      </div>
    </div>
  )
}

export default App
