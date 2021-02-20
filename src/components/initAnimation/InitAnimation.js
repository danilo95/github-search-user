import React from 'react';
import { Spin } from 'antd';

import { AnimationContainer } from './Style';

const InitAnimation = () => {
	return (
		<AnimationContainer>
			<Spin size="large" />
		</AnimationContainer>
	);
};

export default InitAnimation;
