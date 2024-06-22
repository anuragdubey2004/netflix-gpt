import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
=======
import { useDispatch } from 'react-redux';
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
import { addUpcomingMovies } from '../Utils/moviesSlice';

const useUpcomingMovies= ()=> {
     
    const dispatch = useDispatch();

<<<<<<< HEAD
    const upcomingMovies = useSelector(
      (store) => store.movies.upcomingMovies
    );

=======
   
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
const getUpcomingMovies = async() =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',
       API_OPTIONS
    );

       const json = await data.json();
<<<<<<< HEAD
      
=======
       console.log(json.results);
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
       dispatch(addUpcomingMovies(json.results));

};

useEffect(()=>{
<<<<<<< HEAD
   !upcomingMovies && getUpcomingMovies();
=======
   getUpcomingMovies();
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
}, []); 

};

export default useUpcomingMovies;