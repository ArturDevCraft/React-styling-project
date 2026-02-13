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
}) {
	const initialSliderVal = value < min ? min : val;
	const [sliderVal, setSliderVal] = useState(initialSliderVal);
	const changeHandler = (e) => {
		setSliderVal(e.target.value);
		onChange?.();
	};
	const content = (
		<StyledSlider
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
		>
			{children}
		</StyledSlider>
	);
	return label ? (
		<StyledLabel htmlFor={name}>
			{label}
			{content}
		</StyledLabel>
	) : (
		content
	);
}
