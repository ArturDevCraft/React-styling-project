import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	font-size: 0.7em;
	@media (min-width: 768px) {
		font-size: 0.9em;
	}

	@media (min-width: 1024px) {
		font-size: 1em;
	}
`;

export default StyledHeader;
