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
	padding: 1rem 2rem;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadow.small.pressed};
		color: ${({ theme }) => theme.color.accent};
	}
	&:active {
		box-shadow: ${({ theme }) => theme.shadow.small.pressed};
	}
`;

export default StyledButton;
