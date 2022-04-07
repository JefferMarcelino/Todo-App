const TodoList = (props) => {
    
    if (props.todos.length !== 0) {
        var todolist = props.todos.map(todo => {
            var isDid = todo.did ? "todo did" : "todo"
            return (
                <div className={ isDid } key={ todo.id } onClick={(e) => {
                    e.target.classList.add("did")
                    todo.did = true
                    console.log("III", props.todos)
                }}>
                    <p>{ todo.task }</p>
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