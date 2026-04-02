import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from './todo.service';
import { Task } from '../todo';

export const useTasks = () => {
    return useQuery<Task[], Error>({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });
};
