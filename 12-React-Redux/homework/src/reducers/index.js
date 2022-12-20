import { GET_MOVIE, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from '../actions/index'

const initialState = {
    movies: [],
    favorites: [],
    movieDetail: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_MOVIE:
        return {...state, movies: action.payload.Search}    
        case GET_MOVIE_DETAIL:
        return {...state, movieDetail: action.payload}
        case ADD_MOVIE_FAVORITE:
        return {...state, favorites: [...state.favorites, action.payload]}
        case REMOVE_MOVIE_FAVORITE:
        return {...state, favorites: state.favorites.filter(
            movie => movie.Id !== action.payload) }
        default:
            return{...state} 
    }
}

export default reducer