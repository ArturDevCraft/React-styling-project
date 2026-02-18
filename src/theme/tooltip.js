import { css } from 'styled-components';

const tooltip = (variant) => css`
	${(props) =>
		props.$tooltip &&
		css`
			overflow: visible;
			position: relative;
			z-index: 1;
			&::after {
				content: ${(props) => (props.$tooltip ? `"${props.$tooltip}"` : '""')};
				display: inline-block;
				background-color: var(--text);
				border-radius: 0.5em;
				box-shadow: ${({ theme }) => theme.shadow?.small.flat};
				color: var(--bg);
				opacity: 0;
				padding: 0.7em;
				pointer-events: none;
				position: absolute;
				text-align: center;
				transition: opacity 0.3s;
				visibility: hidden;
				white-space: nowrap;
				z-index: 9998;
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
			}
			&::before {
				content: '';
				position: absolute;
				border-width: 0.5rem;
				border-style: solid;
				opacity: 0;
				transition: opacity 0.3s;
				visibility: hidden;
				z-index: 9999;
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
			}

			&:hover::after,
			&:hover::before {
				opacity: 1;
				visibility: visible;
			}

			&:hover {
				z-index: 9999;
			}
		`}
`;

export default tooltip;
