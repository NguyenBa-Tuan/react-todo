// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListTodos from "./ListTodos";
import TotalTask from "./TotalTask";

function Todos() {
    const [todos, setTodos] = useState([]);

    const [todo, setTodo] = useState("");

    const handleOnChangeInput = (todo) => {
        setTodo(todo.target.value);
    };

    const handleSubmitTodo = (event) => {
        event.preventDefault();
        if (!todo) {
            alert("Please add a task description.");
            return;
        }
        let newTodo = {
            id: Math.floor(Math.random() * 10000 + 1),
            title: todo,
            isOpen: false,
        };
        let newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("");
    };

    return (
        <div className="App">
            <h1>todo</h1>
            <form
                className="form-add-todo"
                onSubmit={(e) => handleSubmitTodo(e)}
            >
                <input
                    placeholder="Add task..."
                    onChange={(todo) => handleOnChangeInput(todo)}
                    value={todo}
                />
                <button onClick={(e) => handleSubmitTodo(e)}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
                    </svg>
                </button>
            </form>
            {todos.length !== 0 ? (
                <ListTodos todos={todos} setTodos={setTodos} />
            ) : (
                <div>You're all caught up!</div>
            )}
            <TotalTask todos={todos} />
        </div>
    );
}

export default Todos;