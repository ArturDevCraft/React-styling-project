import styled from 'styled-components';

const variant = {
	small: {
		padding: '0.5rem 1.5rem',
		width: '9rem',
		fontSize: '0.85rem',
	},
	medium: { padding: '0.9rem 1.5rem', width: '12rem', fontSize: '1rem' },
	big: { padding: '1.2rem 1.8rem', width: '15rem', fontSize: '1.3rem' },
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
	background-color: ${({ theme }) => theme.color?.background || '#adadad'};
	box-shadow: ${({ theme }) => theme.shadow?.small.flat};
	border-radius: 2em;
	border: none;
	color: ${({ theme }) => theme.color?.text || '#302f2f'};
	cursor: pointer;
	font-weight: 600;
	margin: 1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	transition:
		color 0.3s ease,
		scale 0.3s ease,
		box-shadow 0.3s ease;
	white-space: nowrap;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadow?.big.flat};
		color: ${({ theme }) => theme.color?.accent};
	}
	&:active {
		box-shadow: ${({ theme }) => theme.shadow?.verySmall.pressed};
		scale: 0.95;
	}
	${({ type }) => variant?.[type] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width }) => width && `width: ${width * 3}rem; `}
	${({ style }) => style}
`;

export default StyledButton;
