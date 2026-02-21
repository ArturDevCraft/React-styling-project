import styled, { css } from 'styled-components';
import variant from './variants';
import tooltip from '../../theme/tooltip';
import Slider from './Slider';

const sliderThumbStyles = css`
	appearance: none;
	height: 1em;
	width: 1em;
	border-radius: 0 50% 50% 0;
	background-color: var(--accent);
	border: none;
	${({ $thickness }) => variant?.[$thickness] ?? variant.thicker}
`;

const StyledSliderInner = styled.input.attrs({ type: 'range' })`
	align-items: stretch;
	background: transparent;
	border: none;
	color: var(--text);
	cursor: pointer;
	font-weight: 400;
	overflow: hidden;
	padding: 0;
	white-space: nowrap;
	vertical-align: middle;
	line-height: 1;
	-webkit-appearance: none;
	appearance: none;
	background-image: linear-gradient(var(--accent), var(--accent));

	background-size: clamp(
			0%,
			${({ value, min, max }) => ((value - min) / (max - min)) * 100}%,
			calc(100% - 1em)
		)
		100%;
	background-repeat: no-repeat;
	border-radius: 2em;
	height: 100%;
	width: 100%;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		${sliderThumbStyles}
	}
	&::-moz-range-thumb {
		${sliderThumbStyles}
	}
`;

const StyledSliderWrapper = styled.div`
	--bg: ${({ theme }) => theme.color?.background || '#e6e6e6'};
	--text: ${({ theme }) => theme.color?.text || '#686868'};
	--shadowLight: ${({ theme }) => theme.color?.shadowLight || '#ffffff'};
	--shadowDark: ${({ theme }) => theme.color?.shadowDark || '#939699'};
	--accent: ${({ theme }) => theme.color?.accent || '#0088ff'};
	--accentHover: ${({ theme }) => theme.color?.accentHover || '#0077e0'};

	background-color: var(--bg);
	box-shadow: ${({ theme }) => theme.shadow?.small.pressed};
	column-gap: 0.5em;
	border-radius: 2em;
	padding: 0;
	margin: 1rem;
	display: inline-flex;
	vertical-align: middle;
	transition: scale 0.3s ease-out;
	z-index: 0;

	&:hover {
		scale: 1.05;
		${StyledSliderInner} {
			background-image: linear-gradient(var(--accentHover), var(--accentHover));
		}
		${StyledSliderInner}::-webkit-slider-thumb {
			background-color: var(--accentHover);
		}
		${StyledSliderInner}::-moz-range-thumb {
			background-color: var(--accentHover);
		}
	}
	${tooltip(variant)}
	${({ size }) => variant?.[size] ?? variant.medium}
	${({ $thickness }) => variant?.[$thickness] ?? variant.thicker}
	${({ shape }) => variant?.[shape]}
	${({ width, size }) =>
		width &&
		css`
			width: calc(${variant?.[size]?.width ?? variant.medium.width} * ${width});
		`}
	${({ style }) => css`
		${style}
	`}
`;

const StyledSlider = ({
	id,
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
	$tooltip,
	$tooltipPosition,
	$tooltipSize,
	$thickness,
}) => (
	<StyledSliderWrapper
		onClick={onClick}
		style={style}
		width={width}
		type={type}
		size={size}
		$tooltip={$tooltip}
		$tooltipPosition={$tooltipPosition}
		$tooltipSize={$tooltipSize}
		$thickness={$thickness}
	>
		<StyledSliderInner
			onChange={onChange}
			id={id}
			name={name}
			value={value}
			min={min}
			max={max}
			step={step}
		/>
	</StyledSliderWrapper>
);

export default StyledSlider;
