import {
	getListOfUsers,
	getUserInfo,
	getUserRepos,
} from '../components/api/Api';

export const types = {
	GET_ALL_USERS: 'GET_ALL_USERS',
	LOADING_USERS: 'LOADING_USERS',
	ERROR_FETCH_USERS: 'ERROR_FETCH_USERS',
	TOTAL_USERS: 'TOTAL_USERS',
	GET_USER_INFO: 'GET_USER_INFO',
	LOADING_USER_INFO: 'LOADING_USER_INFO',
	USER_ERROR: 'USER_ERROR',
	GET_USER_REPOS: 'GET_USER_REPOS',
	LOADING_USER_REPOS: 'LOADING_USER_REPOS',
	USER_REPOS_ERROR: 'USER_REPOS_ERROR',
};

export const loadingUsers = () => (dispatch) => {
	dispatch({ type: types.LOADING_USERS, payload: true });
};

export const searchUsersByName = (params, page) => async (dispatch) => {
	const response = await getListOfUsers(params, page);
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

export const loadingUserInfo = () => (dispatch) => {
	dispatch({ type: types.LOADING_USER_INFO, payload: true });
};

export const getUserInfoById = (id) => async (dispatch) => {
	const response = await getUserInfo(id);
	if (response.error) {
		dispatch({
			type: types.USER_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_USER_INFO, payload: response });
	}
};

export const loadingRepos = () => (dispatch) => {
	dispatch({ type: types.LOADING_USER_REPOS, payload: true });
};

export const getUserReposById = (id, page) => async (dispatch) => {
	const response = await getUserRepos(id, page);
	if (response.error) {
		dispatch({
			type: types.USER_REPOS_ERROR,
			payload: response.error,
		});
	} else {
		dispatch({ type: types.GET_USER_REPOS, payload: response });
	}
};
