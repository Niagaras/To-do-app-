import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from 'core/layouts/public/public.component';
import TodoComponent from 'pages/todo/todo.component';
import {Routes} from './routes';

const router = createBrowserRouter([
    {
        path: Routes.todo,
        element: <PublicComponent/>,
        children: [
            {
                index: true,
                element: <TodoComponent/>,
            }
        ],
    },
], {basename: '/',});

export default router;
