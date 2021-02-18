import React from 'react';
import { List } from 'antd';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import { TitleContainer } from '../globalStyle/Index';
import History from '../history/History';

const ListOfUsers = ({ items }) => {
	return (
		<div>
			<List
				itemLayout="vertical"
				size="large"
				dataSource={items}
				renderItem={(item) => (
					<List.Item
						key={item.id}
						extra={
							<img
								width={250}
								height={250}
								alt="profile-pic"
								src={item.avatar_url}
								onClick={() => console.log(1)}
							/>
						}
					>
						<List.Item.Meta
							title={
								<TitleContainer>
									<span>{item.login}</span>
									<FavoriteItem
										id={item.id}
										userName={item.login}
										img={item.avatar_url}
									/>
								</TitleContainer>
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ListOfUsers;
