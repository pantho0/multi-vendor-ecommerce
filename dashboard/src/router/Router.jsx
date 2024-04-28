
import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';
import { useEffect } from 'react';
import { getRoutes } from './routes';

const routes = getRoutes()


const router = createBrowserRouter([...publicRoutes, routes])

export default router;