import styled, { css } from 'styled-components';
import Icon from '../Icon';
import variant from './variants';

const tooltip = css`
	${(props) =>
		props.$tooltip &&
		css`
			position: relative;
			overflow: visible;
			&::after {
				content: ${(props) => (props.$tooltip ? `"${props.$tooltip}"` : '""')};
				display: inline-block;
				background-color: var(--text);
				box-shadow: ${({ theme }) => theme.shadow?.small.flat};
				color: var(--bg);
				position: absolute;
				${props.$tooltipSize !== '' &&
				css`
					font-size: ${variant?.[props.$tooltipSize]?.fontSize};
				`}
				${props.$tooltipPosition === 'bottom' &&
				css`
					top: calc(100% + 1rem);
					left: 50%;
					transform: translateX(-50%);
				`}
				${props.$tooltipPosition === 'top' &&
				css`
					bottom: calc(100% + 1rem);
					left: 50%;
					transform: translateX(-50%);
				`}

				${props.$tooltipPosition === 'right' &&
				css`
					left: calc(100% + 1rem);
					top: 50%;
					transform: translateY(-50%);
				`}
				${props.$tooltipPosition === 'left' &&
				css`
					right: calc(100% + 1rem);
					top: 50%;
					transform: translateY(-50%);
				`}
				
				opacity: 0;
				transition: opacity 0.3s;
				padding: 0.7em;
				border-radius: 0.5em;
				visibility: hidden;
				text-align: center;
				pointer-events: none;
				z-index: 9998;
			}
			&::before {
				content: '';
				position: absolute;

				border-width: 0.5rem;
				border-style: solid;
				opacity: 0;
				transition: opacity 0.3s;
				visibility: hidden;

				${props.$tooltipPosition === 'bottom' &&
				css`
					top: 100%;
					border-color: transparent transparent var(--text) transparent;
					left: 50%;
					transform: translateX(-50%);
				`}
				${props.$tooltipPosition === 'top' &&
				css`
					bottom: 100%;
					border-color: var(--text) transparent transparent transparent;
					left: 50%;
					transform: translateX(-50%);
				`}

				${props.$tooltipPosition === 'right' &&
				css`
					left: 100%;
					border-color: transparent var(--text) transparent transparent;
					top: 50%;
					transform: translateY(-50%);
				`}

				${props.$tooltipPosition === 'left' &&
				css`
					right: 100%;
					border-color: transparent transparent transparent var(--text);
					top: 50%;
					transform: translateY(-50%);
				`}

				z-index: 9999;
			}
			&:hover::after,
			&:hover::before {
				opacity: 1;
				visibility: visible;
			}
		`}
`;

const StyledButton = styled.button`
	/* default colors */
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
	border-radius: 2em;
	border: none;
	color: var(--text);
	cursor: pointer;
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
	${tooltip}
	&:active {
		box-shadow: ${({ theme }) => theme.shadow?.verySmall.pressed};
		scale: 1;
	}
	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		`width: calc( ${variant?.[size]?.width ?? variant.medium.width} * ${width}); `}
	${({ style }) => style}
`;

export default StyledButton;
