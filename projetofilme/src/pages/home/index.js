import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import api from '../../Services/Api'
import './Home.css'

//url https://api.themoviedb.org/3/movie/now_playing?api_key=17c5240459ff29cd1d8077570ac08401

function Home(){
    const[filmes,setFilmes]=useState([])
    const{loading,setLoading}=useState(true)
    useEffect(()=>{
        async function loadFilmes(){
            const response= await api.get("movie/now_playing",{
                params:{
                    api_key:"17c5240459ff29cd1d8077570ac08401",
                    language:"pt-BR",
                    page:1,
                }
            })
            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10))
        }
        loadFilmes()
    },[])
    if(loading){
        return(
            <div className='loading'>
               <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div className='container'>
           <div className='lista-filmes'>
               {filmes.map((filme)=>{
                   return(
                       <article key={filme.id}>
                           <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`imagem do filme ${filme.title}`}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                       </article>
                   )
               })}
           </div>
        </div>
    )
}
export default Home