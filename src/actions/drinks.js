// export const UPDATE_DEMO = 'example/UPDATE_DEMO'

//These are the actions reffered to in the reducers

export const updateButtonPress = times => ({
  type: 'UPDATE_BUTTON',
  times
})

export const drinksReqHasErrored = bool =>({
	type: 'DRINKS_HAS_ERRORED',
	hasErrored: bool
})

export const drinksReqIsLoading = bool => ({
	type: 'DRINKS_IS_LOADING',
	isLoading: bool
})

// Note#123 the type value, which is invoked in the reducer...cont in reducers/drinks.js

export const drinksReqSuccess = drinks => ({
	type: 'DRINKS_REQ_SUCCESS',
	drinks
})

// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(itemsIsLoading(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//     };
// }