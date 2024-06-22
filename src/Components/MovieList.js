import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({title, movies}) => {
<<<<<<< HEAD
 
=======
  console.log(movies);
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b

  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }
 
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
<<<<<<< HEAD
        <div className='flex overflow-x-scroll'>
            
            <div className='flex {overflow-x: hidden;}'>
=======
        <div className='flex overflow-x-scroll '>
            
            <div className='flex'>
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
              {movies?.map((movie) => (<MovieCards key={movie.id} posterPath={movie.poster_path} />
            
            ))}
                
            </div>
        </div>
    </div>
  );
};

export default MovieList;