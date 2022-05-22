import { Link } from 'react-router-dom' //Importando o Link do React Router
import './header.css' //Importando o CSS da pagina
function Header(){ //Iniciando o componente
    return(
        <header> 
           <Link className='logo' to='/'>Prime Flix</Link>
           <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
           
        </header>
    )
}
export default Header //Exportando o componente para o Router