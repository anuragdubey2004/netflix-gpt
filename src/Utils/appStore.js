import { configureStore } from "@reduxjs/toolkit"
import   userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice";
<<<<<<< HEAD
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";
=======
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b



const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
<<<<<<< HEAD
        gpt: gptReducer, 
        config: configReducer,  
=======
>>>>>>> f5cdcd4b947110f506314a8bb156d7b036acfb1b
    },
});

export default appStore;