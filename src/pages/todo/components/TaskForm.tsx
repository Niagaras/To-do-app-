import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useStyles } from './todo.styles';
import { createTask, updateTask } from '../actions/todo.service';
import { useEffect, useState } from 'react';
import { Task, TaskStatus } from '../models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { setEditingTask } from '../../../store/store.reducer';
import { RootState } from '../../../store/store.config';
import { en } from 'assets/lang/en';

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
                placeholder={en.task_title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={description}
                placeholder={en.task_description}
                required
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="todo">{en.status_todo}</option>
                <option value="in-progress">{en.status_in_progress}</option>
                <option value="done">{en.status_done}</option>
            </select>
            <label>
                {en.date}
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
                    className={classes.submitButton}
                >
                    {editingTask ? en.save : en.add}
                </button>
                <button
                    type="button"
                    className={classes.button}
                    onClick={() => dispatch(setEditingTask(null))}
                >
                   {en.cancel}
                </button>
            </div>
        </form>
    );
};

export default TaskForm;