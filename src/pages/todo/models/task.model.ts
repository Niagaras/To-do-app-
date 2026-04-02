import { Task } from '../todo';

export interface TaskListResponse {
    data: Task[];
}

export interface TaskSingleResponse {
    data: Task;
}

export type TaskRequest = Omit<Task, 'id'>;
