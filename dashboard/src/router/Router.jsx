import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';
import { getRoutes } from './routes';

const routes = getRoutes()


const router = createBrowserRouter([...publicRoutes, routes])

export default router;