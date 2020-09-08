import TaskEntity from '../entity/TaskEntity';
import HabitEntity from '../entity/HabitEntity';
import wrapPromise from '../utils/wrapPromise';

export function fetchHabits() {
    let p = new Promise<HabitEntity[]>((res, rej) => {
        fetch('/api/habits')
        .then(r => r.ok ? r.json() : (rej(r.statusText)))
        .then(r => res(r))
        .catch(err => rej(err));
    });

    return wrapPromise(p);
};

export function fetchTasks() {
    let p = new Promise<TaskEntity[]>((res, rej) => {
        fetch('/api/tasks')
        .then(r => r.ok ? r.json() : (rej(r.statusText)))
        .then(r => res(r))
        .catch(err => rej(err));
    });

    return p;
}