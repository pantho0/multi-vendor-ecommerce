import MainLayout from '../../layout/MainLayout';
import ProtectRoute from './ProtectRoute';
import { privateRoutes } from './privateRoutes';




export const getRoutes = () => {

    privateRoutes.map(r =>{
        r.element = <ProtectRoute route={r}>
            {r.element}
        </ProtectRoute>
    })

    return {
        path : '/',
        element : <MainLayout/>,
        children : privateRoutes
    }
}
