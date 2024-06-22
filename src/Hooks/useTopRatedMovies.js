import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
=======
import { useDispatch } from 'react-redux';
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
import { addTopRatedMovies } from '../Utils/moviesSlice';

const useTopRatedMovies= ()=> {
     
    const dispatch = useDispatch();

<<<<<<< HEAD
    const topRatedMovies = useSelector(
      (store) => store.movies.topRatedMovies
    );

=======
   
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
const getTopRatedMovies = async() =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1',
       API_OPTIONS
    );

       const json = await data.json();
<<<<<<< HEAD
     
=======
       console.log(json.results);
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
       dispatch(addTopRatedMovies(json.results));

};

useEffect(()=>{
<<<<<<< HEAD
   !topRatedMovies && getTopRatedMovies();
=======
   getTopRatedMovies();
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
}, []); 

};

export default useTopRatedMovies;