import { types } from '../actions/UsersAction';

const initialState = {
	listOfUsers: [],
	totalUsers: 0,
	loadingListOfUsers: false,
	error: {},
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

		case types.LOADING_USERS:
			return {
				...state,
				loadingListOfUsers: action.payload,
			};
		default:
			return state;
	}
};
