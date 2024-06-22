import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
=======
import { useDispatch } from 'react-redux';
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
import { addNowPlayingMovies } from '../Utils/moviesSlice';

const useNowPlayingMovies= ()=> {
     
    const dispatch = useDispatch();
<<<<<<< HEAD
   
    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );
=======

>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
   
const getNowPlayingMovies = async() =>{

    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
       API_OPTIONS
    );

       const json = await data.json();
<<<<<<< HEAD
      
=======
       console.log(json.results);
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
       dispatch(addNowPlayingMovies(json.results));

};

useEffect(()=>{
<<<<<<< HEAD
   !nowPlayingMovies && getNowPlayingMovies();
=======
   getNowPlayingMovies();
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
}, []); 

};

export default useNowPlayingMovies;