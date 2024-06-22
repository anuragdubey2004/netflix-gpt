import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
       nowPlayingMovies: null,
       trailerVideo: null,
<<<<<<< HEAD
       popularMovies: null,
       topRatedMovies: null,
       upcomingMovies: null
=======
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies= action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addTrailerVideo,
                addPopularMovies, addTopRatedMovies, addUpcomingMovies 
             } = moviesSlice.actions;

export default moviesSlice.reducer;

