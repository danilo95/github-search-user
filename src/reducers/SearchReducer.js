import { types } from '../actions/SearchAction';

const initialState = {
	lastSearchTerm: '',
	currentPage: 1,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SEARCH_TERM:
			return {
				...state,
				lastSearchTerm: action.payload,
			};
		case types.SET_PAGINATION_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		default:
			return state;
	}
};
