import { DELETE_CITY, GET_CITY } from "../actions";

const initialState = {
    cities:[],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_CITY:
    return { ...state, cities: [...state.cities, action.payload] };

    case DELETE_CITY:
    return { ...state, cities: state.cities.filter(
      city => city.id !== action.payload
    )};

    default:
      return { ...state };
  }
};

export default reducer