import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { deleteFavorite } from '../utils/Utils';
import History from '../history/History';
import { ListTitle } from '../globalStyle/Index';

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
		<div>
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
								width={250}
								height={250}
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
						/>
						<Button
							danger
							onClick={() => {
								handleDeleteFavorite(item.id);
							}}
						>
							Delete
						</Button>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default FavoriteUsersList;
