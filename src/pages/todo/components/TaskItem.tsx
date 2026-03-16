import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Task } from '../models/todo.model';
import { useStyles } from './todo.styles';
import { deleteTask } from '../actions/todo.service';
import { useDispatch } from 'react-redux';
import { setEditingTask } from '../../../store/store.reducer';

interface Props {
    task: Task;
}

const TaskItem = ({ task }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    return (
        <div className={classes.taskItem}>
            <h3 className={classes.taskTitle}>{task.title}</h3>
            <div className={classes.taskDesc}>{task.description}</div>
            <div className={classes.taskDate}>{task.date}</div>
            <span className={classes.taskStatus}>{task.status}</span>
            <div className={classes.actions}>
                <button
                    style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => deleteMutation.mutate(task.id)}
                >
                    Delete
                </button>
                <button
                    style={{ backgroundColor: 'yellow', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={() => dispatch(setEditingTask(task))}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default TaskItem;