import { getListOfUsers } from '../components/api/Api';

export const types = {
	GET_ALL_USERS: 'GET_ALL_USERS',
	LOADING_USERS: 'LOADING_USERS',
	ERROR_FETCH_USERS: 'ERROR_FETCH_USERS',
	TOTAL_USERS: 'TOTAL_USERS',
};

export const loadingUsers = () => (dispatch) => {
	dispatch({ type: types.LOADING_USERS, payload: true });
};

export const searchUsersByName = (params) => async (dispatch) => {
	const response = await getListOfUsers(params);
	console.log('response', response);
	if (response.error) {
		dispatch({
			type: types.ERROR_FETCH_USERS,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_ALL_USERS, payload: response.items });
		dispatch({ type: types.TOTAL_USERS, payload: response.total_count });
	}
};
