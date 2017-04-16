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
//Cont. from action/drinks,js. Note this function is called by having the case name of a differently named drinkReqSuccess func in action/drinks.js 
export function drinks(state = [], action) {
    switch (action.type) {
        case 'DRINKS_REQ_SUCCESS':
            return action.drinks;

        default:
            return state;
    }
}
