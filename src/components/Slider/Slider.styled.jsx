import styled, { css } from 'styled-components';
import variant from './variants';

const tooltip = css`
	${(props) =>
		props.$tooltip &&
		css`
			overflow: visible;
			&::after {
				content: ${(props) => (props.$tooltip ? `"${props.$tooltip}"` : '""')};
				display: inline-block;
				background-color: var(--text);
				box-shadow: ${({ theme }) => theme.shadow?.small.flat};
				color: var(--bg);
				position: absolute;

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
				
				opacity: 0;
				transition: opacity 0.3s;
				padding: 0.7em;
				border-radius: 0.5em;
				visibility: hidden;
				text-align: center;
				pointer-events: none;
				z-index: 9998;
			}
			&::before {
				content: '';
				position: absolute;

				border-width: 0.5rem;
				border-style: solid;
				opacity: 0;
				transition: opacity 0.3s;
				visibility: hidden;

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

				z-index: 9999;
			}
			&:hover::after,
			&:hover::before {
				opacity: 1;
				visibility: visible;
			}
		`}
`;

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
		scale: 1.1;
	}
	${tooltip}
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
	$tooltip,
	$tooltipPosition,
	$tooltipSize,
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
