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
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() =>
                                    handleOnClickCheckBox(item.id, item.isOpen)
                                }
                                checked={item.isOpen ? true : false}
                            />

                            {item.title}
                            <span onClick={() => handleDelete(item.id)}>
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
