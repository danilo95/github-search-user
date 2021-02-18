import { types } from '../actions/UsersAction';

const initialState = {
	listOfUsers: [],
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
		case types.GET_SINGLE_CHARACTER_ERROR:
			return {
				...state,
				error: action.payload,
				loadingListOfUsers: false,
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
