import styled, { css } from 'styled-components';

const StyledColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	${(props) =>
		props?.align === 'right' &&
		css`
			align-items: flex-end;
		`};
	${(props) =>
		props?.align === 'left' &&
		css`
			align-items: flex-start;
		`};
	${(props) =>
		props?.align === 'center' &&
		css`
			align-items: center;
		`};
`;

export default StyledColumnWrapper;
