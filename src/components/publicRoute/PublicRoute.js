import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../navBar/Navbar';
import { LayoutWrapper, Content } from '../globalStyle/Index';
import { Layout } from 'antd';
const { Footer } = Layout;

const PublicRoute = ({ component: Component, path }) => {
	return (
		<Route
			path={path}
			render={(props) => {
				return (
					<div>
						<Navbar />
						<LayoutWrapper>
							<Content>
								<Component {...props} />
							</Content>
						</LayoutWrapper>
						<Footer style={{ textAlign: 'center' }}>
							©2021 Created by Danilo Rivera
						</Footer>
					</div>
				);
			}}
		/>
	);
};

export default PublicRoute;
