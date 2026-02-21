import styled, { css } from 'styled-components';
import Icon from '../Icon';
import variant from './variants';
import tooltip from '../../theme/tooltip';

const StyledButton = styled.button`
	/* default colors */
	--bg: ${({ theme }) => theme.color?.background || '#e6e6e6'};
	--text: ${({ theme }) => theme.color?.text || '#686868'};
	--shadowLight: ${({ theme }) => theme.color?.shadowLight || '#ffffff'};
	--shadowDark: ${({ theme }) => theme.color?.shadowDark || '#939699'};
	--accent: ${({ theme }) => theme.color?.accent || '#0088ff'};
	--accentHover: ${({ theme }) => theme.color?.accentHover || '#0077e0'};

	background-image: linear-gradient(
		110deg,
		var(--shadowLight) -120%,
		var(--bg) 50%
	);
	box-shadow: ${({ theme }) => theme.shadow?.medium.flat};
	border-radius: 2em;
	border: none;
	color: var(--text);
	cursor: pointer;
	display: inline-flex;
	justify-content: space-evenly;
	align-items: center;
	font-weight: 600;
	margin: 1rem;
	overflow: hidden;
	padding: 0.9em;
	text-overflow: ellipsis;
	transition:
		color 0.3s ease,
		scale 0.2s ease,
		box-shadow 0.3s ease;
	white-space: nowrap;
	&:hover {
		color: var(--accent);
		scale: 1.05;
	}
	${tooltip(variant)}
	&:active {
		box-shadow: ${({ theme }) => theme.shadow?.verySmall.pressed};
		scale: 1;
	}
	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		css`
			width: calc(${variant?.[size]?.width ?? variant.medium.width} * ${width});
		`}

	${({ $thickness }) => variant?.[$thickness] ?? variant.thicker}
	${({ $type }) =>
		$type === 'clear' &&
		css`
			${variant.clear}
		`}
	${({ $type }) =>
		$type === 'cta' &&
		css`
			${variant.cta}
		`}
	${({ disabled }) =>
		disabled &&
		css`
			${variant.disabled}
		`}
	${({ style }) => css`
		${style}
	`}
`;

export default StyledButton;
