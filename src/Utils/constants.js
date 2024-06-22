const TMDB_Authorization =  process.env.REACT_APP_TMDB_TOKEN;

export const LOGO_URL =
   "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_LOGO = 
    "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";  

export const BG_LOGO = 
    "https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg";    

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + TMDB_Authorization,
    }
  };  

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const SUPPORTED_LANGUAGES = [
    
          {identifier: "en", name: "English"}, 
          {identifier: "hindi", name: "Hindi"},
          {identifier: "spanish", name: "Spanish"}
          
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPEN_AI;

