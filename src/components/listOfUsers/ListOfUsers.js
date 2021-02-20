import React from 'react';
import { List, Button } from 'antd';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import { TitleContainer, ListTitle } from '../globalStyle/Index';
import History from '../history/History';

const ListOfUsers = ({ items }) => {
	const handleRedirect = (user) => {
		History.push(`/user/${user}`);
	};
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
								onClick={() => handleRedirect(item.login)}
							/>
						}
					>
						<List.Item.Meta
							title={
								<TitleContainer>
									<ListTitle
										onClick={() =>
											handleRedirect(item.login)
										}
									>
										{item.login}
									</ListTitle>
									<FavoriteItem
										id={item.id}
										userName={item.login}
										img={item.avatar_url}
									/>
								</TitleContainer>
							}
							description={
								<Button
									type="primary"
									onClick={() => handleRedirect(item.login)}
								>
									Show user info
								</Button>
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ListOfUsers;
