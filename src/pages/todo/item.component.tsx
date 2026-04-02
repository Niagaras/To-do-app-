import { Task } from './todo';
import { useStyles } from './todo.styles';
import { useDeleteTask } from './actions/useTaskMutations';
import { useDispatch } from 'react-redux';
import { setEditingTask } from '../../store/store.reducer';
import { en } from 'assets/lang/en';
import Button from '../../core/shared/button/button.component';

interface Props {
    task: Task;
}

const TaskItem = ({ task }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const deleteTaskMutation = useDeleteTask();

    return (
        <div className={classes.taskItem}>
            <h3 className={classes.taskTitle}>{task.title}</h3>
            <div className={classes.taskDesc}>{task.description}</div>
            <div className={classes.taskDate}>{task.date}</div>
            <span className={classes.taskStatus}>{task.status}</span>
            <div className={classes.actions}>
                <Button
                    variant="danger"
                    onClick={() => deleteTaskMutation.mutate(task.id)}
                >
                    {en.delete}
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => dispatch(setEditingTask(task))}
                >
                    {en.edit}
                </Button>
            </div>
        </div>
    );
};

export default TaskItem;