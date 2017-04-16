
//These are the actions reffered to in the reducers
export const drinksReqHasErrored = bool =>({
	type: 'DRINKS_HAS_ERRORED',
	hasErrored: bool
})

export const drinksReqIsLoading = bool => ({
	type: 'DRINKS_IS_LOADING',
	isLoading: bool
})

// Note#123 the type value, which is invoked in the reducer...cont. in reducers/drinks.js

export const drinksReqSuccess = drinks => ({
	type: 'DRINKS_REQ_SUCCESS',
	drinks
})

export function fetchDrinksData(url) {
    return (dispatch) => {
        dispatch(drinksReqIsLoading(true));

        fetch(url)
            .then((response) => {

                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(drinksReqIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((drinks) => dispatch(drinksReqSuccess(drinks)))
            .catch(() => dispatch(drinksReqHasErrored(true)));
    };
}