//import dalla libreria react-router-dom
import {Navigate, Outlet} from 'react-router-dom';

// ricevo le props
const Protected = ({user, children}) => {

    // se user non esiste allora ritorno a /landing randomization la view
    if (!user) {
        return <Navigate to='/landing' replace />;
    }

    return children ? children : <Outlet />;
};

export default Protected
