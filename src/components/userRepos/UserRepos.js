import React from 'react';
import { List, Button } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { StartContainer } from '../globalStyle/Index';

const UserRepos = ({ repos, loading, totalRepos }) => {
	const handleRedirect = (path) => {
		window.open(path, '_blank');
	};
	return (
		<div>
			<h2>Repositories ({totalRepos})</h2>
			<List
				itemLayout="horizontal"
				dataSource={repos}
				loading={loading}
				renderItem={(item) => (
					<List.Item
						actions={[
							<Button
								onClick={() => handleRedirect(item.html_url)}
							>
								go to Github
							</Button>,
						]}
					>
						<List.Item.Meta
							title={
								<span>
									{item.name}
									<StartContainer>
										<StarFilled />
										{item.stargazers_count}
									</StartContainer>
								</span>
							}
							description={item.description}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default UserRepos;
