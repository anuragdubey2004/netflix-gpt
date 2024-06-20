import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch} from 'react-redux';
import {addTrailerVideo} from "../Utils/moviesSlice";

const useMovieTrailer = (movieId)=>{
      
    const dispatch = useDispatch();
     
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
        getMovieVideo();
    },[]);

};

export default useMovieTrailer;