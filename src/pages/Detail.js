import { useParams } from "react-router-dom";
import axios from 'axios';
import Moment from 'moment';
import {useState} from 'react';

function Detail(){
  const { filmId } = useParams();
  const [film, setFilm] = useState("");
  const afficherResultatAxios = () =>{
    axios.get('https://api.themoviedb.org/3/movie/'+filmId+'?api_key=7895d7303f1f8e515f614ee410bbf032')
    .then( response => (      
        setFilm(response.data) 
    ))   
  }
  

  afficherResultatAxios();
  
    return (
  
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="p-8 rounded-t-lg" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${film.poster_path}`} alt="affiche film" />
    <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{film.original_title}</h5>
        <div className="flex items-center mt-2">
            <svg aria-hidden="true" className={`w-5 h-5 ${film.vote_average/2 >= 1 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className={`w-5 h-5 ${film.vote_average/2 >= 2 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className={`w-5 h-5 ${film.vote_average/2 >= 3 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className={`w-5 h-5 ${film.vote_average/2 >= 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className={`w-5 h-5 ${film.vote_average/2 >= 5 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{film.vote_average} sur 10</p>
        </div>
        <div className="px5 pb-5">
            <p className="text-xs mt-3 font-semibold text-purple-500 dark:text-white">
                {film?.genres?.map((e) => {
                return <span> {e.name} </span>;
                })}
            </p>
            <p className="text-sm mt-3 text-justify text-gray-900 dark:text-white">{film.overview}</p>
        </div>
        <div className="flex items-center mt-5">
        <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Retour</a>
        </div>
    </div>
</div>
    );
};

    export default Detail;