import TaskEntity from '../entity/TaskEntity';
import HabitEntity from '../entity/HabitEntity';

export function fetchTasks() {
    return new Promise<TaskEntity[]>((res, rej) => {
        fetch('/api/tasks')
        .then(r => r.ok ? r.json() : (rej(r.statusText)))
        .then(r => res(r))
        .catch(err => rej(err));
    });
}

export function fetchHabits() {
    return new Promise<HabitEntity[]>((res, rej) => {
        fetch('/api/habits')
        .then(r => r.ok ? r.json() : (rej(r.statusText)))
        .then(r => res(r))
        .catch(err => rej(err));
    });
};