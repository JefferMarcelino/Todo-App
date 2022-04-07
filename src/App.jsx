import { useState } from "react";
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

function App() {
  const [ todos, setTodos ] = useState([
    {id: 1, task: "Do the Homework", did: true},
    {id: 2, task: "Code a website", did: false},
    {id: 3, task: "Cook", did: true},
    {id: 4, task: "Buy a new Computer", did: false}
])

  const deleteTodo = id => {
    setTodos(todos.filter(todo => {
      if (todo.id !== id) {
        return todo
      }
    }))
  }

  return (
    <div className="App">
      <Header />
      <TodoList todos={ todos } deleteTodo={ deleteTodo }/>
      <AddTodo todos={ todos } setTodos={ setTodos }/>
    </div>
  )
}

export default App
