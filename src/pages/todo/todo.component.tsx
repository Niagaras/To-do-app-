import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from './actions/todo.service';
import TaskForm from './components/TaskForm';
import Column from './components/Column';

const TodoComponent = () => {
    const { data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>My Todo App</h1>
            <TaskForm />
            <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <Column title="Todo" status="todo" tasks={tasks} />
                <Column title="In Progress" status="in-progress" tasks={tasks} />
                <Column title="Done" status="done" tasks={tasks} />
            </div>
        </div>
    );
};

export default TodoComponent;