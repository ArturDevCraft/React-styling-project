import styled from 'styled-components';
import Icon from '../Icon';

const variant = {
	small: {
		width: '14rem',
		fontSize: '1.3rem',
	},
	medium: { width: '18rem', fontSize: '1.6rem' },
	big: { width: '22rem', fontSize: '2rem' },
	square: {
		aspectRatio: '1 / 1',
		whiteSpace: 'wrap',
		lineHeight: 1.8,
		borderRadius: '20%',
	},
	get round() {
		return { ...this.square, borderRadius: '50%' };
	},
};

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
