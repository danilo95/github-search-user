export const types = {
	GET_ALL_USERS: 'GET_ALL_USERS',
	LOADING_USERS: 'LOADING_USERS',
	ERROR_FETCH_USERS: 'ERROR_FETCH_USERS',
};

export const loadingUsers = () => (dispatch) => {
	dispatch({ type: types.LOADING_USERS, payload: true });
};

export const searchUsersByName = (name) => async (dispatch) => {
	//const response = await getSingleCharacter(name);
	const response = [];
	if (response.error) {
		dispatch({
			type: types.ERROR_FETCH_USERS,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_ALL_USERS, payload: response.data });
	}
};
