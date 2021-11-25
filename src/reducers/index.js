


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};


function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
            ...state,
            moviesLoaded: action.payload.Search // el Search viene de la API, que trae un objeto Search que tiene objetos adentro con las pelis que matchean con el titulo de busqeuda.
        };
    }
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
            ...state,
            movieDetail: action.payload
            }        
    };
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter((el) => el.imdbID !== action.payload)
            }        
    };
    
    return state;
}

export default rootReducer;