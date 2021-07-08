import { combineReducers } from 'redux';
import travel from './travels';
import travelModels from './travelsModel';

export default combineReducers({
    travel,
    travelModels
});