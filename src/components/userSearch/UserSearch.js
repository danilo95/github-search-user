import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListOfUsers from '../listOfUsers/ListOfUsers';
import LoadingView from '../loading/Loading';
import ErrorPage from '../errorPage/ErrorPage';
import { loadingUsers, searchUsersByName } from '../../actions/UsersAction';
import { setLastSearchTerm, setPage } from '../../actions/SearchAction';
import { Pagination } from 'antd';
import SearchUserForm from '../searchUserForm/SearchUserForm';
import { Footer, TotalDisplay } from '../globalStyle/Index';

const UserSearch = () => {
	const dispatch = useDispatch();
	const { listOfUsers, loadingListOfUsers, totalUsers, error } = useSelector(
		(state) => state.users
	);
	const { lastSearchTerm, currentPage } = useSelector(
		(state) => state.search
	);
	let totalPages = totalUsers / 20;

	const handleOnChange = (e) => {
		const { value } = e.target;
		dispatch(setLastSearchTerm(value));
	};

	const onSubmit = () => {
		dispatch(loadingUsers());
		dispatch(searchUsersByName(lastSearchTerm, 1));
		dispatch(setPage(1));
	};

	const handlePagination = (page) => {
		dispatch(loadingUsers());
		dispatch(searchUsersByName(lastSearchTerm, page));
		dispatch(setPage(page));
	};

	return (
		<div>
			<SearchUserForm
				searchTerm={lastSearchTerm}
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
						current={currentPage}
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
