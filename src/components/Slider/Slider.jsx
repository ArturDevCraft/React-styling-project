import { useState } from 'react';
import StyledLabel from './label.styled';
import StyledSlider from './Slider.styled';

export default function Slider({
	onClick,
	onChange,
	name,
	value = 0,
	size,
	width,
	style,
	children,
	label,
	type,
	min = 0,
	max = 100,
	step,
	tooltip,
	tooltipPosition,
	tooltipSize,
	thickness,
}) {
	const initialSliderVal = value < min ? min : value;
	const [sliderVal, setSliderVal] = useState(initialSliderVal);
	const changeHandler = (e) => {
		setSliderVal(e.target.value);
		onChange?.(e);
	};
	const content = (
		<StyledSlider
			id={name}
			name={name}
			size={size}
			width={width}
			style={style}
			onClick={onClick}
			onChange={changeHandler}
			value={sliderVal}
			type={type}
			min={min}
			max={max}
			step={step}
			$tooltip={tooltip}
			$tooltipPosition={tooltipPosition}
			$tooltipSize={tooltipSize}
			$thickness={thickness}
		></StyledSlider>
	);
	return label ? (
		<>
			<StyledLabel size={size} width={width} htmlFor={name}>
				{label} {content}
			</StyledLabel>
			{children}
		</>
	) : (
		<>
			{content}
			{children}
		</>
	);
}
