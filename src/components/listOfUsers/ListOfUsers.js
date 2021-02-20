import React from 'react';
import { List, Button } from 'antd';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import History from '../history/History';
import GotoTop from '../goToTop/GoToTop';
import { TitleContainer, ListTitle, UserContainer } from '../globalStyle/Index';

const ListOfUsers = ({ items }) => {
	const handleRedirect = (user) => {
		History.push(`/user/${user}`);
	};
	return (
		<UserContainer>
			<GotoTop />
			<List
				itemLayout="vertical"
				size="large"
				dataSource={items}
				renderItem={(item) => (
					<List.Item
						key={item.id}
						extra={
							<img
								width={150}
								height={150}
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
									{`Show ${item.login} info`}
								</Button>
							}
						/>
					</List.Item>
				)}
			/>
		</UserContainer>
	);
};

export default ListOfUsers;
