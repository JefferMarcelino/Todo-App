import { useTodoContext } from "../contexts/TodoListContext"

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoContext();

  return (
    <div className="todos-list">
      { todos.length === 0 ? (
        <div className="no-todos">
          <p>You have no todos, yay!</p>
        </div>
      ) : (
        todos.map((todo) => {          
          return (
            <div className="todo red" key={ todo.id } onClick={(e) => { toggleTodo(todo.id) }}>
              <p className={ todo.did == true ? "did" : "" }>{ todo.task }</p>
              <span onClick={ (e) => { deleteTodo(todo.id) } }></span>
            </div>
          )
        })
      ) }
    </div>
  )
};

export default TodoList;