import React, { useEffect } from 'react';
import { getUserInfoById, loadingUserInfo } from '../../actions/UsersAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../userInfo/UserInfo';
import LoadingView from '../loading/Loading';
import ErrorPage from '../errorPage/ErrorPage';

const SelectedUser = () => {
	const dispatch = useDispatch();
	let { id } = useParams();
	const { loadingUserInfo: loadingInfo, userInfo, userError } = useSelector(
		(state) => state.users
	);

	useEffect(() => {
		dispatch(loadingUserInfo());
		dispatch(getUserInfoById(id));
	}, []);

	return (
		<div>
			{userError.code && (
				<ErrorPage code={userError.code} message={userError.message} />
			)}
			{loadingInfo && <LoadingView />}
			{!loadingInfo && userInfo?.length > 0 && (
				<UserInfo user={userInfo} />
			)}
		</div>
	);
};

export default SelectedUser;
