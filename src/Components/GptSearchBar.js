import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../Utils/language";
// import openai from "../Utils/openai";
import  {API_OPTIONS}  from "../Utils/constants";
import { addGptMovieResult } from "../Utils/GptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 Movies, comma separated like the example result given ahead. Example Results: Gadar, Shole, Don, Golmaal, Koi Mil Gaya";

    //Needs to be undone
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const gptMovies = [
      "Salaar",
      "Inception",
      "Marvels",
      "John Wick",
      "Your Name",
    ];

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    
  };

  return (
    <div className="pt-[10%] flex justify-center">
        <form 
              className="w-1/2 bg-black grid grid-cols-12" 
              onSubmit={(e) => e.preventDefault()}>
            <input  
                ref ={searchText}
                className="p-4 m-4 rounded-md col-span-9 text-xl " 
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className="col-span-3 px-4 py-2 m-4 bg-red-700 text-white rounded-md"
                     onClick= {handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;