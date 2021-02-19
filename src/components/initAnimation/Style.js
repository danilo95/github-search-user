import styled, { keyframes } from 'styled-components';

const heartBeat = keyframes`
0% {
	transform: scale(1);
}
25% {
	transform: scale(1.05);
}
50% {
	transform: scale(1);
}
75% {
	transform: scale(1.05);
}
100% {
	transform: scale(1);
}
`;

export const AnimationContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	img {
		animation-name: ${heartBeat};
		animation-duration: 1.8s;
		animation-iteration-count: infinite;
	}
`;
