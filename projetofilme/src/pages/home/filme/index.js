import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import api from '../../../Services/Api'
import './filme-info.css'

function Filme(){
    const {id}=useParams();
    const [filme,setFilme]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"17c5240459ff29cd1d8077570ac08401",
                    language:"pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
                
            })
            .catch(()=>{
                console.log("Filme não encontrado");
            })

        }
        loadFilme();

        return ()=>{
            console.log("componente desmontado");
        }
    },[])
    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando Detalhes...</h1>
            </div>

        )
    }
    return(
        <div>
           <div className='filme-info'>
               <h1>{filme.title}</h1>
               <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

               <h3>Sinopse</h3>
               <span>{filme.overview}</span>
               <strong>Avaliação:{filme.vote_average} /10</strong>

               <div className='area-buttons'>
                   <button>Salvar</button>
                   <button><a href='#'>
                       Trailer
                   </a></button>
               </div>
           </div>
        </div>
    )
}
export default Filme