import React, { useEffect, useState } from 'react';
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
import { Footer } from '../globalStyle/Index';
import { Pagination } from 'antd';

const SelectedUser = () => {
	const [currentPage, setCurrentPage] = useState(1);
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
		dispatch(getUserReposById(id, currentPage));
	}, []);

	const handlePagination = (page) => {
		setCurrentPage(page);
		dispatch(loadingRepos());
		dispatch(getUserReposById(id, page));
	};

	return (
		<div>
			{userError.code && (
				<ErrorPage code={userError.code} message={userError.message} />
			)}
			{loadingInfo && <LoadingView />}
			{!loadingInfo && !userError.code && <UserInfo user={userInfo} />}
			{!userReposError.code && (
				<div>
					<UserRepos
						loading={loadingUserRepos}
						repos={userRepos}
						totalRepos={userInfo.public_repos}
					/>
					<Footer>
						<Pagination
							simple
							current={currentPage}
							total={userInfo.public_repos}
							onChange={handlePagination}
							defaultPageSize={10}
						/>
					</Footer>
				</div>
			)}
		</div>
	);
};

export default SelectedUser;
