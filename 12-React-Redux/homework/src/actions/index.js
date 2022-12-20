export const GET_MOVIE = "GET_MOVIE"
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
const apiKey = "9d0ece42"

export const getMovies = (title) => {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        .then(response => response.json())
        .then((data) => dispatch({type: GET_MOVIE, payload: data}))
    }
}

export const getMovieDetail = (id) => {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_MOVIE_DETAIL, payload: data}))
    }
}

export const addMovieFavorite = (movie) => {
    return {type: ADD_MOVIE_FAVORITE, payload: movie}
}

export const removeMovieFavorite = (id) => {
    return {type: REMOVE_MOVIE_FAVORITE, payload: id}
}