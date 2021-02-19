import React, { useEffect } from 'react';
import {
	getUserInfoById,
	loadingUserInfo,
	loadingRepos,
	getUserReposById,
} from '../../actions/UsersAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../userInfo/UserInfo';
import UserRepos from '../userRepos/UserRepos';
import LoadingView from '../loading/Loading';
import ErrorPage from '../errorPage/ErrorPage';

const SelectedUser = () => {
	const dispatch = useDispatch();
	let { id } = useParams();
	const {
		loadingUserInfo: loadingInfo,
		userInfo,
		userError,
		loadingUserRepos,
		userRepos,
		userReposError,
	} = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(loadingUserInfo());
		dispatch(getUserInfoById(id));
		dispatch(loadingRepos());
		dispatch(getUserReposById(id));
	}, []);

	return (
		<div>
			{userError.code && (
				<ErrorPage code={userError.code} message={userError.message} />
			)}
			{loadingInfo && <LoadingView />}
			{!loadingInfo && !userError.code && <UserInfo user={userInfo} />}
			{!userReposError.code && (
				<UserRepos loading={loadingUserRepos} repos={userRepos} />
			)}
		</div>
	);
};

export default SelectedUser;
