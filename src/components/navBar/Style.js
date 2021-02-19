import styled from 'styled-components';

export const HeaderContainer = styled.header``;

export const HeaderWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	padding: 0 0 0 20px;
	height: 60px;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-items: center;
	max-height: 60px;
	background: #1890ff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Links = styled.div`
	margin: auto 0 auto auto;
	height: 100%;
	display: flex;
	align-items: center;
	div {
		cursor: pointer;
		color: #ffffff;
		margin-right: 20px;
		&:hover {
			font-weight: bold;
		}
	}
`;

export const LogoContainer = styled.div`
	cursor: pointer;
`;
