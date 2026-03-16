import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useStyles } from './todo.styles';
import { createTask, updateTask } from '../actions/todo.service';
import { useEffect, useState } from 'react';
import { Task, TaskStatus } from '../models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { setEditingTask } from '../../../store/store.reducer';
import { RootState } from '../../../store/store.config';

const TaskForm = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<TaskStatus>('todo');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();
    const editingTask = useSelector((state: RootState) => state.editingTask.editingTask);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setStatus(editingTask.status);
            setDate(editingTask.date ?? '');
        } else {
            setTitle('');
            setDescription('');
            setStatus('todo');
            setDate('');
        }
    }, [editingTask]);

    const addMutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setTitle('');
            setDescription('');
            setStatus('todo');
            setDate('');
        },
    });

    const updateMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            dispatch(setEditingTask(null));
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        const payload = {
            title,
            description,
            status,
            date: date || new Date().toISOString(),
        };
        if (editingTask) {
            updateMutation.mutate({ ...payload, id: editingTask.id });
        } else {
            addMutation.mutate(payload);
        }
    };

    return (
        <form className={classes.taskForm} onSubmit={handleSubmit}>
            <input
                value={title}
                type="text"
                placeholder="Task Title"
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={description}
                placeholder="Task Description"
                required
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="todo">To-do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <label>
                Date:
                <input
                    value={date}
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <div className={classes.actions}>
                <button
                    type="submit"
                    style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                >
                    {editingTask ? 'Save' : 'Add'}
                </button>
                <button
                    type="button"
                    style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => dispatch(setEditingTask(null))}
                >
                    Cancel Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;