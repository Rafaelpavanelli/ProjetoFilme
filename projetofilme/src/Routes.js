import { BrowserRouter,Routes,Route } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Home from './pages/home'
import Filme from './pages/home/filme'
import Header from "./components/Header";
import Erro from "./pages/erro/index";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/filme/:id" element={ <Filme/>} />
            <Route path="/Favoritos" element={ <Favoritos/>} />
            

            <Route path="*" element={<Erro/>}/>
        </Routes>
        
        
        </BrowserRouter>
    );
}
export default RoutesApp