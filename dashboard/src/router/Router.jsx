
import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';

const router = createBrowserRouter([...publicRoutes, ...privateRoutes])

export default router;