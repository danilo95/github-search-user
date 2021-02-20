import React from 'react';
import { List, Button } from 'antd';
import { StarFilled } from '@ant-design/icons';

const UserRepos = ({ repos, loading }) => {
	const reducer = (accumulator, item) => {
		return accumulator + item?.stargazers_count;
	};
	const totalStarts = repos.reduce(reducer, 0);

	const handleRedirect = (path) => {
		window.open(path, '_blank');
	};
	return (
		<div>
			<h2>Repositories</h2>
			<p>
				<StarFilled /> {totalStarts}
			</p>
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
							title={item.name}
							description={item.description}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default UserRepos;
