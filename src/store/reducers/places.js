import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://lh3.googleusercontent.com/pVeZMB4f__289BG2L7cU98UI1uoGxxZVekqkD7SwJSKZC1hQu1fVOEzRIJ6jajBB-grY=s128"
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.p[placeKey];
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectPlace: null,
      };
    default:
      return state;
  }
};
export default reducer;
