import styled, { css } from 'styled-components';
import variant from './variants';

const StyledLabel = styled.label`
	--multiplyWidth: 1.8;
	${({ $labelPosition }) =>
		$labelPosition === 'top' &&
		css`
			--multiplyWidth: 1;
		`}

	font-size: ${({ size }) =>
		variant?.[size]?.fontSize ?? variant.medium.fontSize};

	width: 100%;
	min-width: calc(
		${({ size }) => variant?.[size]?.width ?? variant.medium.width} *
			var(--multiplyWidth)
	);
	${({ width, size }) =>
		width &&
		css`
			min-width: calc(
				${variant?.[size]?.width ?? variant.medium.width} *
					var(--multiplyWidth) * ${width}
			);
		`}

	display: flex;
	gap: 0.5em;
	justify-content: space-between;
	align-items: center;
	${({ type }) =>
		(type === 'radio' || type === 'checkbox') &&
		css`
			min-width: 0;
			justify-content: flex-start;
		`}
	${({ $labelPosition }) =>
		$labelPosition === 'top' &&
		css`
			flex-direction: column;
		`}
`;

export default StyledLabel;
