import TaskForm from './form.component';
import Column from './column.component';
import { useTasks } from './actions/useTasks';
import { useStyles } from './todo.styles';

const TodoComponent = () => {
    const classes = useStyles();
    const { data: tasks = [], isLoading, isError } = useTasks();

    if (isLoading) {
        return <div className={classes.loading}>Loading...</div>;
    }

    if (isError) {
        return <div className={classes.error}>An error occurred while loading tasks.</div>;
    }

    return (
        <div>
            <h1 className={classes.pageTitle}>My Todo App</h1>
            <TaskForm />
            <div className={classes.container}>
                <Column title="Todo" status="todo" tasks={tasks} />
                <Column title="In Progress" status="in-progress" tasks={tasks} />
                <Column title="Done" status="done" tasks={tasks} />
            </div>
        </div>
    );
};

export default TodoComponent;