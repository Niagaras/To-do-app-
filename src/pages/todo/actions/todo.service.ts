import axiosInstance from '../../../core/configs/axios.config';
import { Task } from '../models/todo.model';

const API_BASE = '/tasks'; 

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await axiosInstance.get(API_BASE);
    return response.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await axiosInstance.post(API_BASE, task);
    return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
    await axiosInstance.delete(`${API_BASE}/${id}`);
};

export const updateTask = async (task: Task): Promise<Task> => {
    const response = await axiosInstance.put(`${API_BASE}/${task.id}`, task);
    return response.data;
};