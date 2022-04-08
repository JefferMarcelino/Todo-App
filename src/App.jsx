import { useState, useEffect } from "react";
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
  
  useEffect(() => {
    var newTodos = JSON.parse(localStorage.getItem("tasks"))
  }, [JSON.parse(localStorage.getItem("tasks"))])

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id === id ? false : todo)
    
    localStorage.clear()
    localStorage.setItem("tasks", JSON.stringify(newTodos))
    
    setTodos(todos.filter(todo => todo.id === id ? false : todo))
  }

  return (
    <div className="App">
      <Header />
      <AddTodo todos={ todos } setTodos={ setTodos }/>
      <TodoList todos={ todos } deleteTodo={ deleteTodo }/>
    </div>
  )
}

export default App
