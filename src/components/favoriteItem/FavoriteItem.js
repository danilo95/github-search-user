import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { saveFavorite, deleteFavorite } from '../utils/Utils';
import { FavoriteContainer } from './Style';

const FavoriteItem = ({ id, userName, img }) => {
	const [selected, setSelected] = useState(false);
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

	useEffect(() => {
		let flag = favorites.some((i) => i.id === id);
		setSelected(flag);
	}, []);

	const handleFavorite = () => {
		setSelected(true);
		saveFavorite(id, userName, img);
	};

	const handleDeleteFavorite = () => {
		setSelected(false);
		deleteFavorite(id);
	};

	return (
		<FavoriteContainer selected={selected}>
			{selected ? (
				<Tooltip title="added to favorites">
					<HeartFilled onClick={() => handleDeleteFavorite()} />
				</Tooltip>
			) : (
				<Tooltip title="add fo favorites">
					<HeartOutlined onClick={() => handleFavorite()} />
				</Tooltip>
			)}
		</FavoriteContainer>
	);
};

export default FavoriteItem;
