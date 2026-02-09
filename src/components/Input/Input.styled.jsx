import styled from 'styled-components';

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

const StyledInput = styled.input`
	background-image: linear-gradient(
		110deg,
		${({ theme }) => theme.color?.shadowLight || '#c7c7c7'} -120%,
		${({ theme }) => theme.color?.background || '#adadad'} 50%
	);
	box-shadow: ${({ theme }) => theme.shadow?.verySmall.pressed};
	border-radius: 2em;
	border: none;
	color: ${({ theme }) => theme.color?.text || '#302f2f'};

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
	&:hover {
		/* box-shadow: ${({ theme }) => theme.shadow?.veryBig.flat}; */
		color: ${({ theme }) => theme.color?.accent};
	}
	&:focus {
		box-shadow: ${({ theme }) => `${theme.shadow?.medium.flat},
			${theme.shadow?.small.pressed}`};
		color: ${({ theme }) => theme.color?.accent};
		outline: none;
		scale: 1.2;
	}

	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		`width: calc( ${variant?.[size]?.width ?? variant.medium.width} * ${width}); `}
	${({ style }) => style}
`;

export default StyledInput;
