import styled from 'styled-components';
import StyledInput from './Input.styled';

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
		lineHeight: 1.5,
		borderRadius: '20%',
		padding: '1.3em',
	},
	get round() {
		return { ...this.square, borderRadius: '50%' };
	},
};

const StyledInputWrapper = styled.div`
	/* default colors */
	--bg: ${({ theme }) => theme.color?.background || '#e6e6e6'};
	--text: ${({ theme }) => theme.color?.text || '#686868'};
	--shadowLight: ${({ theme }) => theme.color?.shadowLight || '#ffffff'};
	--shadowDark: ${({ theme }) => theme.color?.shadowDark || '#939699'};
	--accent: ${({ theme }) => theme.color?.accent || '#0088ff'};

	align-items: stretch;
	background-image: linear-gradient(
		110deg,
		var(--shadowLight) -120%,
		var(--bg) 50%
	);
	box-shadow: ${({ theme }) => theme.shadow?.verySmall.pressed};
	border-radius: 2em;
	border: none;
	color: var(--text);
	column-gap: 0.5em;
	display: inline-flex;
	font-weight: 400;
	margin: 1rem;
	overflow: hidden;
	padding: 0.9em 2em;
	text-overflow: ellipsis;
	transition:
		color 0.3s ease,
		box-shadow 0.3s ease,
		scale 0.3s ease-out;
	white-space: nowrap;
	vertical-align: middle;
	&:hover,
	&:hover ${StyledInput}::placeholder, &:hover ${StyledInput} {
		color: var(--accent);
	}
	${StyledInput},${StyledInput}::placeholder {
		color: var(--text);
		transition: color 0.3s ease;
		${({ style }) => style && `color: ${style.color}`}
	}
	${StyledInput}::placeholder {
		font-weight: 300;
	}

	${({ type, theme }) =>
		type !== 'radio' &&
		`
		&:has(${StyledInput}:focus) {
			box-shadow: ${theme.shadow?.medium.flat},
						${theme.shadow?.small.pressed};
			color: var(--accent);
			outline: none;
			scale: 1.2;
		}
		`}

	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		`width: calc( ${variant?.[size]?.width ?? variant.medium.width} * ${width}); `}
	${({ type, theme, checked }) =>
		type === 'radio' &&
		`
		width: auto; padding: 0.9em; 
		box-shadow: ${theme.shadow?.medium.flat};
		&:has(${StyledInput}:checked){
			box-shadow: ${theme.shadow?.verySmall.pressed};
		}
		${checked && `box-shadow: ${theme.shadow?.verySmall.pressed}`};

		${StyledInput} { 
		appearance:none;
		background-color: var(--bg);
		width: 1em;
		height:1em;
		display: grid;
  		place-content: center;
  		cursor: pointer;
		border: 2px solid var(--bg);
		outline: 2px solid var(--text);
		border-radius: 50%;
			&:checked {
				background-color: var(--text);
			}
		}
	`}
	${({ style }) => style}
`;

export default StyledInputWrapper;
