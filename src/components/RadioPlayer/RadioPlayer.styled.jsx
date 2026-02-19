import styled from 'styled-components';

const StyledRadioPlayer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: ${({ theme }) => theme.shadow?.small.flat};
	border-radius: 1em;
	border: none;
	padding: 0.5em;
`;
export default StyledRadioPlayer;
