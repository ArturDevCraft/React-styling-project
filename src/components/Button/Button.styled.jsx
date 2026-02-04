import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.color.background};
	box-shadow: ${({ theme }) => theme.shadow.small.flat};
	color: ${({ theme }) => theme.color.text};
	cursor: pointer;
	border-radius: 20px;
	border: none;
	font-size: 1rem;
	font-weight: 600;
	padding: 1.2rem 3rem;
	margin: 1rem;
	transition:
		color 0.3s ease,
		scale 0.3s ease,
		box-shadow 0.3s ease;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadow.big.flat};
		color: ${({ theme }) => theme.color.accent};
	}
	&:active {
		box-shadow: ${({ theme }) => theme.shadow.verySmall.pressed};
		scale: 0.95;
	}
`;

export default StyledButton;
