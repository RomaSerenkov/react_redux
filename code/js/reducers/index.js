import {combineReducers} from 'redux';
import carsReducers from './car';
import activeCar from './carActive';

const allReducers = combineReducers ({
    cars: carsReducers,
    activeCar: activeCar
});

export default allReducers;
