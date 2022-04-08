import { useState } from "react";
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

function App() {
  if (!localStorage.getItem("tasks")) {
    var localTodos = ""
  } else {
    var localTodos = JSON.parse(localStorage.getItem("tasks"))
  }
  
  const [ todos, setTodos ] = useState(localTodos)

  const deleteTodo = id => {
    
    const everyTodos = todos.filter(todo => {
      if (todo.id !== id) {
        return todo
      }
    })
    
    setTodos(everyTodos)
    
    localStorage.clear()
    localStorage.setItem("tasks", JSON.stringify(everyTodos))
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
