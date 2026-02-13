import styled from 'styled-components';
import variant from './variants';

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
	transition: opacity 0.3s ease-out;
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
	width: 100%;
	opacity: 0.7;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		${sliderThumbStyles}
	}
	&::-moz-range-thumb {
		${sliderThumbStyles}
	}

	&:hover {
		opacity: 1;
	}
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
	${({ size }) => variant?.[size] ?? variant.medium}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		`width: calc( ${variant?.[size]?.width ?? variant.medium.width} * ${width}); `}
	${({ style }) => style}
`;

const StyledSlider = ({
	onClick,
	onChange,
	name,
	value,
	size,
	width,
	style,
	type,
	min,
	max,
	step,
}) => (
	<StyledSliderWrapper
		onClick={onClick}
		style={style}
		width={width}
		type={type}
		size={size}
	>
		<StyledSliderInner
			onChange={onChange}
			name={name}
			value={value}
			min={min}
			max={max}
			step={step}
		/>
	</StyledSliderWrapper>
);

export default StyledSlider;
