import React from 'react';
import Logo from '../../assets/elaniinLogo.png';
import { AnimationContainer } from './Style';

const InitAnimation = () => {
	return (
		<AnimationContainer>
			<img width="200" src={Logo} alt="logo" />
		</AnimationContainer>
	);
};

export default InitAnimation;
