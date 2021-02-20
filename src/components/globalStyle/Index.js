import styled, { createGlobalStyle } from 'styled-components';

export const Content = styled.div`
	min-height: 100vh;
`;

export const LayoutWrapper = styled.div`
	box-sizing: border-box;
	padding: 0 35px;
`;
export const TotalDisplay = styled.p`
	padding: 10px 0px;
	font-weight: bold;
`;

export const TitleContainer = styled.div`
	display: flex;
	width: 100px;
`;

export const Label = styled.div`
	display: flex;
	height: 20px;
	font-weight: bold;
	p {
		margin-left: 10px;
	}
`;

export const ListTitle = styled.span`
	&:hover {
		cursor: pointer;
		color: blue;
	}
`;

export const StartContainer = styled.div`
	width: 35px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	svg {
		color: yellow;
	}
`;

export const BtnToTop = styled.button`
	display: none;
	position: fixed;
	bottom: 20px;
	right: 30px;
	z-index: 99;
	font-size: 18px;
	border: none;
	outline: none;
	background-color: #1890ff;
	color: white;
	cursor: pointer;
	padding: 15px;
	border-radius: 100%;
	opacity: 0.5;
	&:hover {
		opacity: 1;
	}
`;

export const UserContainer = styled.div`
	@media (max-width: 500px) {
		.ant-list {
			.ant-spin-container {
				.ant-list-items {
					.ant-list-item {
						.ant-list-item-main {
							.ant-list-item-meta-content {
								display: flex;
								flex-direction: column;
								align-items: center;
							}
						}
					}
				}
			}
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	padding: 30px;
`;

//here start global styles
export const GlobalStyle = createGlobalStyle`

  body{
    font-family: 'Roboto', sans-serif;
	line-height: 1.2;
	box-sizing: border-box;
	margin:0px;
  }
  strong{
    font-weight: bold;
  }
  button {
    font-family: 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  
`;
