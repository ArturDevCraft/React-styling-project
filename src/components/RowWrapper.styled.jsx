import styled, { css } from 'styled-components';

const StyledRowWrapper = styled.div`
	display: flex;
	flex-direction: row;

	gap: 2rem;
	${(props) =>
		props?.$align === 'right' &&
		css`
			justify-content: flex-end;
		`};
	${(props) =>
		props?.$align === 'left' &&
		css`
			justify-content: flex-start;
		`};
	${(props) =>
		props?.$align === 'center' &&
		css`
			justify-content: center;
		`};
	${(props) =>
		props?.$align === 'justify' &&
		css`
			justify-content: space-between;
		`};
`;

export default StyledRowWrapper;
