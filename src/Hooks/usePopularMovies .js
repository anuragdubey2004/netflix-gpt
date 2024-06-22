import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/moviesSlice';

const usePopularMovies= ()=> {
     
    const dispatch = useDispatch();

   
const getPopularMovies = async() =>{

    const data = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1",
       API_OPTIONS
    );

       const json = await data.json();
<<<<<<< HEAD
       
=======
       console.log(json.results);
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
       dispatch(addPopularMovies(json.results));

};

useEffect(()=>{
   getPopularMovies();
}, []); 

};

export default usePopularMovies;