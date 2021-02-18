import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListOfUsers from '../listOfUsers/ListOfUsers';
import LoadingView from '../loading/Loading';
import { loadingUsers, searchUsersByName } from '../../actions/UsersAction';
import { Pagination } from 'antd';
import SearchUserForm from '../searchUserForm/SearchUserForm';
import { Footer } from '../globalStyle/Index';

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
		dispatch(searchUsersByName(searchTerm));
	};

	return (
		<div>
			<SearchUserForm
				searchTerm={searchTerm}
				handleOnChange={handleOnChange}
				onSubmit={onSubmit}
			/>
			<p>{`Total Found: ${totalUsers}`}</p>
			{loadingListOfUsers && <LoadingView />}
			{!loadingListOfUsers && listOfUsers && (
				<ListOfUsers items={listOfUsers} />
			)}

			<Footer>
				<Pagination
					defaultCurrent={1}
					total={totalPages}
					simple={true}
					onChange={console.log(1)}
					defaultPageSize={30}
				/>
			</Footer>
		</div>
	);
};

export default UserSearch;
