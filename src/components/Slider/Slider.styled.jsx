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

const sliderThumbStyles = `
		appearance: none;
		height: 2.95em;
		width:2.95em;
		border-radius: 0 50% 50% 0;
		background-color: var(--accent);
		border: none;`;

const StyledSliderInner = styled.input.attrs({ type: 'range' })`
	align-items: stretch;
	background: transparent;
	border: none;
	color: var(--text);
	cursor: pointer;
	font-weight: 400;
	overflow: hidden;
	padding: 0;
	text-overflow: ellipsis;
	transition:
		color 0.3s ease,
		box-shadow 0.3s ease,
		scale 0.3s ease-out;
	white-space: nowrap;
	vertical-align: middle;
	line-height: 1;
	-webkit-appearance: none;
	appearance: none;
	background-image: linear-gradient(var(--accent), var(--accent));

	background-size: clamp(
			0%,
			${({ value, min, max }) => ((value - min) / (max - min)) * 100}%,
			calc(100% - 2.94em)
		)
		100%;
	background-repeat: no-repeat;
	border-radius: 2em;
	height: 2.95em;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		${sliderThumbStyles}
	}
	&::-moz-range-thumb {
		${sliderThumbStyles}
	}

	&:hover {
		color: var(--accent);
	}

	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		`width: calc( ${variant?.[size]?.width ?? variant.medium.width} * ${width}); `}
	${({ style }) => style}
`;

const StyledSliderWrapper = styled.div`
	--bg: ${({ theme }) => theme.color?.background || '#e6e6e6'};
	--text: ${({ theme }) => theme.color?.text || '#686868'};
	--shadowLight: ${({ theme }) => theme.color?.shadowLight || '#ffffff'};
	--shadowDark: ${({ theme }) => theme.color?.shadowDark || '#939699'};
	--accent: ${({ theme }) => theme.color?.accent || '#0088ff'};
	background-color: var(--bg);
	box-shadow: ${({ theme }) => theme.shadow?.small.pressed};
	column-gap: 0.5em;
	border-radius: 2em;
	padding: 0;
	margin: 1rem;
	display: inline-flex;
	vertical-align: middle;
`;

const StyledSlider = ({ children, ...props }) => (
	<StyledSliderWrapper {...props}>
		<StyledSliderInner {...props} />
	</StyledSliderWrapper>
);

export default StyledSlider;
