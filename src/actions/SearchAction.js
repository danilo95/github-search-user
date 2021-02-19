export const types = {
	SET_SEARCH_TERM: 'SET_SEARCH_TERM',
	SET_PAGINATION_PAGE: 'SET_PAGINATION_PAGE',
};

export const setLastSearchTerm = (searchTerm) => (dispatch) => {
	dispatch({ type: types.SET_SEARCH_TERM, payload: searchTerm });
};

export const setPage = (page) => (dispatch) => {
	dispatch({ type: types.SET_PAGINATION_PAGE, payload: page });
};
