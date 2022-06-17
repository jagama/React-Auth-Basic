//import link dalla libreria reac-router-dom
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            {/* uso il tag semantico */}
            <nav>
                <Link to="/landing">Zona public</Link>
                <span style={{paddingInline: 10}}/>
                <Link to="/home">Zona privata</Link>
            </nav>
        </>

    )
}


