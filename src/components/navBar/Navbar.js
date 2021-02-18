import React from 'react';
import History from '../history/History';
import Logo from '../../assets/githublogo.png';
import { HeaderContainer, HeaderWrapper, Links, LogoContainer } from './Style';
const Navbar = () => {
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<LogoContainer onClick={() => History.push('/')}>
					<img src={Logo} alt="logo" height="60px" width="150px" />
				</LogoContainer>
				<Links>
					<div onClick={() => History.push('/favorites')}>
						Favorites
					</div>
				</Links>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Navbar;
