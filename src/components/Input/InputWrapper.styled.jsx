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
	align-items: stretch;
	column-gap: 0.5em;
	background-image: linear-gradient(
		110deg,
		${({ theme }) => theme.color?.shadowLight || '#c7c7c7'} -120%,
		${({ theme }) => theme.color?.background || '#adadad'} 50%
	);
	box-shadow: ${({ theme }) => theme.shadow?.verySmall.pressed};
	border-radius: 2em;
	border: none;
	color: ${({ theme }) => theme.color?.text || '#302f2f'};
	${StyledInput},${StyledInput}::placeholder {
		color: ${({ theme }) => theme.color?.text || '#302f2f'};
		transition: color 0.3s ease;
	}
	${StyledInput}::placeholder {
		font-weight: 300;
	}

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
		/* box-shadow: ${({ theme }) => theme.shadow?.veryBig.flat}; */
		color: ${({ theme }) => theme.color?.accent};
	}
	${({ type, theme }) =>
		type !== 'radio' &&
		`
		&:has(${StyledInput}:focus) {
			box-shadow: ${({ theme }) => `${theme.shadow?.medium.flat},
				${theme.shadow?.small.pressed}`};
			color: ${({ theme }) => theme.color?.accent};
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
		background-color: ${theme.color?.background || '#adadad'};
		width: 1em;
		height:1em;
		display: grid;
  		place-content: center;
  		cursor: pointer;
		border: 2px solid ${theme.color?.background || '#adadad'};
		outline: 2px solid ${theme.color?.text || '#302f2f'};
		border-radius: 50%;
			&:checked {
				background-color: ${theme.color?.text || '#302f2f'};
			}
			
		}
	`}
	${({ style }) => style}
`;

export default StyledInputWrapper;
