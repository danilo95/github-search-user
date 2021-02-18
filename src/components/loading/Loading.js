import React from 'react';
import { Spin } from 'antd';
import { LoadingContainer } from './Style';

const Loading = () => {
	return (
		<LoadingContainer>
			<div>
				<Spin />
				<p>Loading...</p>
			</div>
		</LoadingContainer>
	);
};

export default Loading;
