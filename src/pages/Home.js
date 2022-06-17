//importo navigate dalla libreria
import {Navigate} from 'react-router-dom';

//passo la props user
const Home = user => {
    return (
        <>
            {/* se user non esiste, torno a /landing rimpiazzando la view */}
            {!user && <Navigate to='/landing' replace/>}

            {/* se user esiste, renderizzo h2 */}
            <h2>Home (Zona privata)</h2>
        </>
    )
}

export default Home