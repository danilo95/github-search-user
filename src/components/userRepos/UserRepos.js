import React from 'react';
import { List, Button } from 'antd';

const UserRepos = ({ repos, loading }) => {
	return (
		<List
			itemLayout="horizontal"
			dataSource={repos}
			loading={loading}
			renderItem={(item) => (
				<List.Item actions={[<Button>go to Github</Button>]}>
					<List.Item.Meta
						title={item.name}
						description={item.description}
					/>
				</List.Item>
			)}
		/>
	);
};

export default UserRepos;
