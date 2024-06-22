import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies ';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
<<<<<<< HEAD
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
   const showGptSearch = useSelector(store => store.gpt.showGptSearch);
=======

const Browse = () => {
    
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

  return (
    <div>
      
      <Header/>
<<<<<<< HEAD
      {showGptSearch ? (
         <GptSearch/>
      ): (
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      )}
=======
      <MainContainer/>
      <SecondaryContainer/>
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
      
    </div>
  )
}

export default Browse;