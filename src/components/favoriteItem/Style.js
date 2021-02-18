import styled from 'styled-components';

export const FavoriteContainer = styled.div`
	display: flex;
	align-items: center;
	color: ${(props) => (props.selected ? 'red' : '#fffff')};
	span {
		margin-left: 10px;
		&:hover {
			cursor: pointer;
			color: red;
		}
	}
`;
