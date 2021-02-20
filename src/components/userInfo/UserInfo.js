import React from 'react';
import { PageHeader, Button, Row } from 'antd';
import {
	MailOutlined,
	UserOutlined,
	SolutionOutlined,
	ShopOutlined,
	CoffeeOutlined,
} from '@ant-design/icons';
import { Label } from '../globalStyle/Index';

const UserInfo = ({ user }) => {
	const handleRedirect = (path) => {
		window.open(path, '_blank');
	};

	const Content = ({ children }) => (
		<Row>
			<div style={{ flex: 1 }}>{children}</div>
		</Row>
	);

	return (
		<PageHeader
			title={user.login}
			subTitle={`Followers ${user.followers}`}
			extra={[
				<Button
					key="1"
					type="primary"
					onClick={() => handleRedirect(user.html_url)}
				>
					Github profile
				</Button>,
			]}
			avatar={{
				src: user.avatar_url,
			}}
		>
			<Content>
				<div>
					<div>
						<Label>
							<SolutionOutlined /> <p>Bio:</p>
						</Label>
						<p>{user.bio || 'No bio found'}</p>
					</div>
					<div>
						<Label>
							<UserOutlined /> <p>Name:</p>
						</Label>
						<p>{user.name || 'No name found'}</p>
					</div>
					<div>
						<Label>
							<ShopOutlined />
							<p>Company:</p>
						</Label>
						<p>{user.company || 'No company found'}</p>
					</div>
					<div>
						<Label>
							<CoffeeOutlined /> <p>Location:</p>
						</Label>
						<p>{user.location || 'No location found'}</p>
					</div>
					<div>
						<Label>
							<MailOutlined /> <p>Email:</p>
						</Label>
						<p>{user.email || 'No email found'}</p>
					</div>
				</div>
			</Content>
		</PageHeader>
	);
};

export default UserInfo;
