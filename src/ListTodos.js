// import { useState } from "react";

const ListTodos = (props) => {
    const { todos, setTodos } = props;

    const handleDelete = (id) => {
        let newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    const handleOnClickCheckBox = (id, isOpen) => {
        let updateTodo = todos.map((item) => {
            if (item.id === id) {
                return { ...item, isOpen: !isOpen };
            }
            return item;
        });
        setTodos(updateTodo);
    };

    return (
        <div>
            <div className="list-todo">
                {todos.map((item) => {
                    return (
                        <li
                            className={!item.isOpen ? "" : "complete"}
                            key={item.id}
                        >
                            <input
                                type="checkbox"
                                onChange={() =>
                                    handleOnClickCheckBox(item.id, item.isOpen)
                                }
                                checked={item.isOpen ? true : false}
                            />
                            <span className="todo-title">{item.title}</span>
                            <span
                                className="delete-btn"
                                onClick={() => handleDelete(item.id)}
                            >
                                {" "}
                                X
                            </span>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default ListTodos;
