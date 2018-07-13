import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

const storeConfig =() => {
  return createStore(rootReducer);
};

export default storeConfig;
