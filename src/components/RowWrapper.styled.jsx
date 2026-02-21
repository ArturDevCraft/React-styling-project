import styled, { css } from 'styled-components';

const StyledRowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

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
	${(props) => css`
		${props?.style}
	`}
	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
	}

	@media (min-width: 1024px) {
	}
`;

export default StyledRowWrapper;
