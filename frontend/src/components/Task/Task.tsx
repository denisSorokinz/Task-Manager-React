import React, { useState, useEffect } from "react";
import TaskEntity from "../../entity/TaskEntity";
import "./Task.scss";

const Task: React.FC<TaskEntity> = ({ ...task }) => {
    let [completed, setCompleted] = useState<number>(task.completed);

    const completeTask = () => {
        //TODO: set completed in DB;
        let toggle = completed === 0 ? 1 : 0;
        let changedTask: TaskEntity = {...task, completed: toggle};
        fetch(`/api/tasks/${task.id}`, {
            method: "POST",
            body: JSON.stringify(changedTask)
        });
        setCompleted(toggle);
    };

    return (
        <li className={completed ? "Task completed" : "Task"}>
            <button
                className="Task__button_complete"
                onClick={completeTask}
            ></button>
            <span className="Task__span_name">{task.name}</span>
        </li>
    );
};

export default Task;
