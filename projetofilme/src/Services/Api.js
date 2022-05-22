import axios from 'axios'

//Base da API:https://api.themoviedb.org/3/
//url da API=https://api.themoviedb.org/3/movie/now_playing?api_key=17c5240459ff29cd1d8077570ac08401

const api=axios.create({
    baseURL:'https://api.themoviedb.org/3/'

})
export default api;
