import styled, { css } from 'styled-components';
import variant from './variants';

const StyledLabel = styled.label`
	font-size: ${({ size }) =>
		variant?.[size]?.fontSize ?? variant.medium.fontSize};
	width: calc(
		${({ size }) => variant?.[size]?.width ?? variant.medium.width} * 1.8
	);
	${({ width, size }) =>
		width &&
		css`
			width: calc(
				${variant?.[size]?.width ?? variant.medium.width} * 1.8 * ${width}
			);
		`}
	display: flex;
	justify-content: space-between;
	align-items: center;
	${({ $labelPosition }) =>
		$labelPosition === 'top' &&
		css`
			flex-direction: column;
		`}
`;

export default StyledLabel;
