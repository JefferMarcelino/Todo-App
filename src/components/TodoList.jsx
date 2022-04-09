const TodoList = (props) => {
    const todos = [...props.todos]

    localStorage.clear()
    localStorage.setItem("tasks", JSON.stringify(todos))

    const handleClick = (e, todo) => {
        if(e.target.classList.contains("did")) {
            e.target.classList.remove("did")
            todo.did = false
        } else {
            e.target.classList.add("did")
            todo.did = true
        }

        localStorage.clear()
        localStorage.setItem("tasks", JSON.stringify(todos))
    }
    
    if (todos.length !== 0) {
        var todolist = todos.map(todo => {
            var isDid = todo.did ? "did" : ""

            return (
                <div className="todo red" key={ todo.id } onClick={(e) => { handleClick(e, todo) }}>
                    <p className={ isDid }>{ todo.task }</p>
                    <span onClick={(e) => { props.deleteTodo(todo.id) }}></span>
                </div>
            )
            }
        )
    } else {
        return (
            <div className="no-todos">
                <p>You have no todos, yay!</p>
            </div>
        )
    }

    return (
        <div className="todos-list">
            { todolist }
        </div>
    );
}
 
export default TodoList;