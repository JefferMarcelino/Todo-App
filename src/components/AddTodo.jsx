const AddTodo = (props) => {
    var todo = {
        task: ""
    }

    const handleChange = e => {
        todo.task = e.target.value
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        
        const inputTodo = document.querySelector("input")
        
        if (inputTodo.value !== "") {
            todo.id = Math.floor(Math.random() * 10000000)
            todo.did = false

            var everyTodos = [todo, ...props.todos]

            props.setTodos(everyTodos)

            localStorage.clear()
            localStorage.setItem("tasks", JSON.stringify(everyTodos))
            inputTodo.value = ""
        }
        
        inputTodo.focus()
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="New Todo..." onChange={ handleChange } />
            <button>Add</button>
        </form>
    );
}

export default AddTodo;