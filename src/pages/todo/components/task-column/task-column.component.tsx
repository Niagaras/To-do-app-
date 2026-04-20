import { useStyles } from '../../todo.styles';
import TaskItem from '../task-item/task-item.component';
import { ITaskColumnProps } from './task-column.d';

const TaskColumn = ({ title, status, tasks }: ITaskColumnProps) => {
    const classes = useStyles();
    const filteredTasks = tasks.filter((t) => t.status === status);

    return (
        <div className={classes.column}>
            <div className={classes.columnHeader}>
                <h3 className={classes.columnTitle}>{title}</h3>
            </div>
            <div className={classes.scrollable}>
                {filteredTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
