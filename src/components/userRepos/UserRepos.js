import React from 'react';
import { List, Button } from 'antd';

const UserRepos = ({ repos, loading }) => {
	const handleRedirect = (path) => {
		window.location.href = path;
	};
	return (
		<div>
			<h2>Repositories</h2>
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
