import { Task, TaskStatus } from '../../todo';

export interface ITaskColumnProps {
    title: string;
    status: TaskStatus;
    tasks: Task[];
}
