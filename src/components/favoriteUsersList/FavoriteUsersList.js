import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { deleteFavorite } from '../utils/Utils';
import History from '../history/History';
import { ListTitle, UserContainer } from '../globalStyle/Index';

const FavoriteUsersList = () => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	const [favoriteList, setFavoriteList] = useState([]);

	const handleRedirect = (user) => {
		History.push(`/user/${user}`);
	};

	useEffect(() => {
		setFavoriteList(favorites);
	}, []);

	const handleDeleteFavorite = (id) => {
		let newFav = deleteFavorite(id);
		setFavoriteList(newFav);
	};

	return (
		<UserContainer>
			<h2>Favorite Users</h2>
			<List
				itemLayout="vertical"
				size="large"
				dataSource={favoriteList}
				renderItem={(item) => (
					<List.Item
						key={item.id}
						extra={
							<img
								width={150}
								height={150}
								alt="profile-pic"
								src={item.img}
								onClick={() => handleRedirect(item.userName)}
							/>
						}
					>
						<List.Item.Meta
							title={
								<ListTitle
									onClick={() =>
										handleRedirect(item.userName)
									}
								>
									{item.userName}
								</ListTitle>
							}
							description={
								<div>
									<Button
										type="primary"
										onClick={() => {
											handleRedirect(item.userName);
										}}
									>
										View Profile
									</Button>
									<Button
										danger
										onClick={() => {
											handleDeleteFavorite(item.id);
										}}
									>
										Delete
									</Button>
								</div>
							}
						/>
					</List.Item>
				)}
			/>
		</UserContainer>
	);
};

export default FavoriteUsersList;
