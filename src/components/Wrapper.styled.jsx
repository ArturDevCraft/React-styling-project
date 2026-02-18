import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
	margin: 0 auto;
	width: 95%;
	padding: 20px;
	--bg: ${({ theme }) => theme.color?.background || '#e6e6e6'};
	--text: ${({ theme }) => theme.color?.text || '#686868'};
	--shadowLight: ${({ theme }) => theme.color?.shadowLight || '#ffffff'};
	--shadowDark: ${({ theme }) => theme.color?.shadowDark || '#939699'};
	--accent: ${({ theme }) => theme.color?.accent || '#0088ff'};

	background-image: linear-gradient(
		110deg,
		var(--shadowLight) -120%,
		var(--bg) 50%
	);
	box-shadow: ${({ theme }) => theme.shadow?.medium.flat};

	@media (min-width: 768px) {
		width: 80%;
		padding: 0 30px 30px 30px;
	}

	@media (min-width: 1024px) {
		max-width: 900px;
		width: 100%;
	}
`;

export default StyledWrapper;
