import {combineReducers} from 'redux';
import { times, drinksReqHasErrored, drinksReqIsLoading, drinks} from './drinks';

export default combineReducers({
	times,
	drinksReqHasErrored,
	drinksReqIsLoading, 
	drinks
})
