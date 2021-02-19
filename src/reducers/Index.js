import { combineReducers } from 'redux';
import userReducer from './usersReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
	users: userReducer,
	search: SearchReducer,
});
