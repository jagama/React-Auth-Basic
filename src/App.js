//libreria react-router-dom
import {Routes, Route} from 'react-router-dom'

import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Protected from "./components/Protected";

// utilizzo lo state functional components
import {useState} from "react";


function App() {

    // setto il mio user
    const [user, setUser] = useState(null);

    // gestione login - logout, con login schiantato
    const handleLogin = () => setUser({id: 0, name: 'Luca'});
    const handleLogout = () => setUser(null);

    // HTML base
    return (
        <>
            <Navigation/>
            <br/>
            {user ? (
                <button onClick={handleLogout}>Esci</button>
            ) : (
                <button onClick={handleLogin}>Entra</button>
            )}

            {/* wrappo le mie route all' interno di Routes e poi stabilisco quale sia la mia Route principale */}
            <Routes>

                {/* route principale -public- identificata come index default, renderizza element=Landing */}
                <Route index element={<Landing/>}/>

                {/* route principale -public- identificata anche per il path:'landing', renderizza element=Landing */}
                <Route path='landing' element={<Landing/>}/>

                {/* route secondaria -privata- renderizza un componente Protected che prende la props user ed esegue logica condizionale */}
                <Route element={<Protected user={user}/>}>

                    {/* route secondaria -privata- renderizza element=Home, solo per utenti loggati */}
                    <Route path="home" element={<Home/>}/>

                    {/* dato che ora ho un Protected Wrapper qui io potrei inserie tutte le pagine e compoennti che voglio  */}
                    {/* by default dato che c'è il wrapper, tutto quello contenuto in esso sarà visibile solo se loggati  */}
                    {/* potete provare a creare un altro componente e renderlo privato con la logica di user al suo interno  */}

                </Route>

                {/* tutte le altre route identificate come (*) sono da non considerare, renderizzerà 404 (potreste anche fare un componente a se) */}
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </>
    );
}

export default App;
