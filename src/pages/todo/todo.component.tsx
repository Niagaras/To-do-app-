import TaskForm from './form.component';
import Column from './column.component';
import { useTasks } from './actions/useTasks';
import { useStyles } from './todo.styles';
import { en } from '../../assets/lang/en';

const TodoComponent = () => {
    const classes = useStyles();
    const { data: tasks = [], isLoading, isError } = useTasks();

    if (isLoading) {
        return <div className={classes.loading}>{en.loading}</div>;
    }

    if (isError) {
        return <div className={classes.error}>{en.error_loading_tasks}</div>;
    }

    return (
        <div>
            <h1 className={classes.pageTitle}>{en.my_todo_app}</h1>
            <TaskForm />
            <div className={classes.container}>
                <Column title={en.todo} status="todo" tasks={tasks} />
                <Column title={en.in_progress} status="in-progress" tasks={tasks} />
                <Column title={en.done} status="done" tasks={tasks} />
            </div>
        </div>
    );
};

export default TodoComponent;