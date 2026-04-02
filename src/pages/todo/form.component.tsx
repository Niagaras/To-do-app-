import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditingTask } from '../../store/store.reducer';
import { RootState } from '../../store/store.config';
import { en } from 'assets/lang/en';
import { Task, TaskStatus } from './todo';
import { useStyles } from './todo.styles';
import { useCreateTask, useUpdateTask } from './actions/useTaskMutations';
import SimpleInput from '../../core/shared/input/simple-input.component';
import Button from '../../core/shared/button/button.component';

const TaskForm = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<TaskStatus>('todo');
    const [date, setDate] = useState('');

    const classes = useStyles();
    const dispatch = useDispatch();
    const editingTask = useSelector((state: RootState) => state.editingTask.editingTask);

    const createTaskMutation = useCreateTask();
    const updateTaskMutation = useUpdateTask();

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
            updateTaskMutation.mutate({ ...payload, id: editingTask.id });
            dispatch(setEditingTask(null));
        } else {
            createTaskMutation.mutate(payload, {
                onSuccess: () => {
                    setTitle('');
                    setDescription('');
                    setStatus('todo');
                    setDate('');
                },
            });
        }
    };

    return (
        <form className={classes.taskForm} onSubmit={handleSubmit}>
            <SimpleInput
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
                <SimpleInput
                    value={date}
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <div className={classes.actions}>
                <Button type="submit" variant="success">
                    {editingTask ? en.save : en.add}
                </Button>
                <Button type="button" variant="secondary" onClick={() => dispatch(setEditingTask(null))}>
                    {en.cancel}
                </Button>
            </div>
        </form>
    );
};

export default TaskForm;