import styled from 'styled-components';

const StyledHorizontalLine = styled.hr`
	/* default colors */
	--bg: ${({ theme }) => theme.color?.background || '#e6e6e6'};
	--text: ${({ theme }) => theme.color?.text || '#686868'};
	--shadowLight: ${({ theme }) => theme.color?.shadowLight || '#ffffff'};
	--shadowDark: ${({ theme }) => theme.color?.shadowDark || '#939699'};
	--accent: ${({ theme }) => theme.color?.accent || '#0088ff'};

	border: none;
	border-top: 1px solid var(--shadowDark);
	margin: 20px 0;
	width: 100%;
`;
export default StyledHorizontalLine;
