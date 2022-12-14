// import { useState } from "react";

import { useCallback, useState } from "react";
import Todos from "./Todos";

const TotalTask = (props) => {
    const { todos } = props;

    const getLength = useCallback(
        (isOpen = "all") => {
            let getLenght;
            if (isOpen === "all") {
                getLenght = Object.keys(todos);
            } else {
                getLenght = todos.filter((item) => item.isOpen !== isOpen);
            }
            return getLenght.length;
        },
        [todos]
    );

    return (
        <div className="total-task">
            <span>
                {getLength() + " "}
                tasks
            </span>
            <span>
                {getLength(false) + " "}
                complete
            </span>
            <span>
                {getLength(true) + " "}
                open
            </span>
        </div>
    );
};

export default TotalTask;
