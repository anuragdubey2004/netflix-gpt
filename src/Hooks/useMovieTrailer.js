import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
<<<<<<< HEAD
import { useDispatch, useSelector} from 'react-redux';
=======
import { useDispatch} from 'react-redux';
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
import {addTrailerVideo} from "../Utils/moviesSlice";

const useMovieTrailer = (movieId)=>{
      
    const dispatch = useDispatch();
<<<<<<< HEAD

    const trailerVideo = useSelector(
        (store) => store.movies.trailerVideo
      );
=======
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
     
    const getMovieVideo = async () =>{
         const data = await fetch('https://api.themoviedb.org/3/movie/'
            + movieId +
            '/videos?language=en-US',
            API_OPTIONS
          );
  
          const json = await data.json();
          
          
          const filterData = json.results.filter((video) => video.type === "Trailer");  // it give me 3 tralier array 
          
          const trailer = filterData.length ? filterData[0]: json.results[0];
         dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(()=>{
<<<<<<< HEAD
        !trailerVideo && getMovieVideo();
=======
        getMovieVideo();
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
    },[]);

};

export default useMovieTrailer;