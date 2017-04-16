import {combineReducers} from 'redux';
import { drinksReqHasErrored, drinksReqIsLoading, drinks} from './drinks';

export default combineReducers({
	drinksReqHasErrored,
	drinksReqIsLoading, 
	drinks
})
