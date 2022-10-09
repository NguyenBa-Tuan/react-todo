import { useCallback } from "react";

const ListTodos = (props) => {
    const { todos, setTodos } = props;

    const handleDelete = useCallback(
        (id) => {
            const newTodos = todos.filter((item) => item.id !== id);
            console.log(newTodos);
            console.log(todos + "old");
            setTodos(newTodos);
        },
        [todos]
    );

    const handleOnClickCheckBox = useCallback(
        (id, isOpen) => {
            let updateTodo = todos.map((item) => {
                if (item.id === id) {
                    return { ...item, isOpen: !isOpen };
                }
                return item;
            });
            setTodos(updateTodo);
        },
        [todos]
    );

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
