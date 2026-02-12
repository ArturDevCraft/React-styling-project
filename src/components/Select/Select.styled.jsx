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
const StyledInnerSelect = styled.select`
	background: transparent;
	cursor: pointer;
	color: inherit;
	border: none;
	font-family: inherit;
	font-weight: inherit;
	margin: 0;
	outline: none;
	padding: 0;
	resize: none;
	text-overflow: ellipsis;
	flex: 1;
	min-width: 0;
`;

const StyledSelectWrapper = styled.div`
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
	box-shadow: ${({ theme }) => theme.shadow?.small.flat};
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
	&:hover ${StyledInnerSelect}::placeholder, &:hover ${StyledInnerSelect} {
		color: var(--accent);
	}

	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		`width: calc( ${variant?.[size]?.width ?? variant.medium.width} * ${width}); `}
	${({ style }) => style}
`;

const StyledSelect = ({ children, innerContent, ...props }) => (
	<StyledSelectWrapper {...props}>
		{innerContent ?? ''}
		<StyledInnerSelect {...props}>{children}</StyledInnerSelect>
	</StyledSelectWrapper>
);

export default StyledSelect;
