import { Props } from '../models/todo.model';
import { useStyles } from './todo.styles';
import TaskItem from './TaskItem';

const Column = ({ title, status, tasks }: Props) => {
    const classes = useStyles();
    const filteredTasks = tasks.filter((t) => t.status === status);

    return (
        <div className={classes.column}>
            <div className={classes.columnHeader}>
                <h3 style={{ margin: '0', textAlign: 'center' }}>{title}</h3>
            </div>
            <div className={classes.scrollable}>
                {filteredTasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Column;