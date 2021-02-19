import { types } from '../actions/UsersAction';

const initialState = {
	listOfUsers: [],
	totalUsers: 0,
	loadingListOfUsers: false,
	error: {},
	loadingUserInfo: false,
	userInfo: {},
	userError: {},
	loadingUserRepos: false,
	userRepos: [],
	userReposError: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_USERS:
			return {
				...state,
				listOfUsers: action.payload,
				loadingListOfUsers: false,
				error: {},
			};
		case types.GET_USER_INFO:
			return {
				...state,
				userInfo: action.payload,
				loadingUserInfo: false,
				userError: {},
			};
		case types.GET_USER_REPOS:
			return {
				...state,
				userRepos: action.payload,
				loadingUserRepos: false,
				userReposError: {},
			};
		case types.TOTAL_USERS:
			return {
				...state,
				totalUsers: action.payload,
			};
		case types.ERROR_FETCH_USERS:
			return {
				...state,
				loadingListOfUsers: false,
				totalUsers: 0,
				listOfUsers: [],
				error: action.payload,
			};
		case types.USER_REPOS_ERROR:
			return {
				...state,
				loadingUserRepos: false,
				userRepos: [],
				userReposError: action.payload,
			};
		case types.USER_ERROR:
			return {
				...state,
				loadingUserInfo: false,
				userInfo: [],
				userError: action.payload,
			};

		case types.LOADING_USERS:
			return {
				...state,
				loadingListOfUsers: action.payload,
			};
		case types.LOADING_USER_INFO:
			return {
				...state,
				loadingUserInfo: action.payload,
			};
		case types.LOADING_USER_REPOS:
			return {
				...state,
				loadingUserRepos: action.payload,
			};
		default:
			return state;
	}
};
