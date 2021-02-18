import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListOfUsers from '../listOfUsers/ListOfUsers';
import LoadingView from '../loading/Loading';
import ErrorPage from '../errorPage/ErrorPage';
import { loadingUsers, searchUsersByName } from '../../actions/UsersAction';
import { Pagination } from 'antd';
import SearchUserForm from '../searchUserForm/SearchUserForm';
import { Footer, TotalDisplay } from '../globalStyle/Index';

const UserSearch = () => {
	const dispatch = useDispatch();

	const { listOfUsers, loadingListOfUsers, totalUsers, error } = useSelector(
		(state) => state.users
	);
	let totalPages = totalUsers / 30;

	const [searchTerm, setSearchTerm] = useState('');

	const handleOnChange = (e) => {
		const { value } = e.target;
		setSearchTerm(value);
	};

	const onSubmit = () => {
		dispatch(loadingUsers());
		dispatch(searchUsersByName(searchTerm, 1));
	};

	const handlePagination = (page) => {
		dispatch(loadingUsers());
		dispatch(searchUsersByName(searchTerm, page));
	};

	return (
		<div>
			<SearchUserForm
				searchTerm={searchTerm}
				handleOnChange={handleOnChange}
				onSubmit={onSubmit}
			/>
			<TotalDisplay>{`Total Found: ${totalUsers}`}</TotalDisplay>
			{error.code && (
				<ErrorPage code={error.code} message={error.message} />
			)}
			{loadingListOfUsers && <LoadingView />}
			{!loadingListOfUsers && listOfUsers?.length > 0 && (
				<ListOfUsers items={listOfUsers} />
			)}
			{listOfUsers.length > 0 && (
				<Footer>
					<Pagination
						simple
						defaultCurrent={1}
						total={totalUsers}
						onChange={handlePagination}
						defaultPageSize={20}
					/>
				</Footer>
			)}
		</div>
	);
};

export default UserSearch;
