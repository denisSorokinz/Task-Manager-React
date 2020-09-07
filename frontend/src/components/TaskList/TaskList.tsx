import React from "react";
import TaskEntity from "../../entity/TaskEntity";
import { fetchTasks } from "../../services/DatabaseService";
import Task from "../Task/Task";
import TaskListContainer from "./TaskListContainer";
import SecondaryText from "../SecondaryText/SecondaryText";

class TaskList extends React.Component {
    state = {
        tasks: [],
        isLoading: true,
    };

    constructor(props: any) {
        super(props);
        //bind setters
    }

    completeFetching = (h: TaskEntity[]) => {
        this.setState({ tasks: h, isLoading: false });
    };

    componentDidMount() {
        fetchTasks()
            .then((h: TaskEntity[]) => this.completeFetching(h))
            .catch((err) => {
                console.error(err);
                this.setState({ isLoading: false });
            });
    }

    render() {
        return this.state.isLoading ? (
            <SecondaryText>Fetching tasks...</SecondaryText>
        ) : this.state.tasks.length ? (
            <TaskListContainer>
                {this.state.tasks.map((task: TaskEntity) => (
                    <Task {...task} key={task.id} />
                ))}
            </TaskListContainer>
        ) : (
            <SecondaryText>No tasks found</SecondaryText>
        );
    }
}

export default TaskList;
