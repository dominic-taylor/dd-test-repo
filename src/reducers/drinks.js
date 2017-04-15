export function times(state = 0, action) {
	switch (action.type){
		case 'UPDATE_BUTTON':
			return action.times;

		default:
			return state;
	}
}
export function drinksReqHasErrored(state = false, action) {
    switch (action.type) {
        case 'DRINKS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function drinksReqIsLoading(state = false, action) {
    switch (action.type) {
        case 'DRINKS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
//Cont. from action/drinks,js. Note this function is called by hacing the case name of a differently named drinkReqSuccess func in action/drinks.js 
export function drinks(state = [], action) {
    switch (action.type) {
        case 'DRINKS_REQ_SUCCESS':
            return action.drinks;

        default:
            return state;
    }
}


// export const updateButtonPress = times => ({
//   type: UPDATE_BUTTON,
//   times
// })

// export const drinksReqHasErrored = bool =>({
// 	type: DRINKS_HAS_ERRORED,
// 	hasErrored: bool
// })

// export const drinksReqIsLoading = bool => ({
// 	type: DRINKS_IS_LOADING,
// 	isLoading: bool
// })

// export const drinksReqSuccess = drinks => ({
// 	type: DRINKS_REQ_SUCCESS,
// 	drinks
// })