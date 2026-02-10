import StyledInput from './Input.styled';
import StyledInputWrapper from './InputWrapper.styled';

export default function Input({
	children,
	onClick,
	onChange,
	name,
	value,
	size,
	width,
	style,
	shape,
	placeholder,
}) {
	const tag = shape === 'square' ? 'textarea' : 'input';
	return (
		<StyledInputWrapper
			size={size}
			width={width}
			style={style}
			shape={shape}
			onClick={onClick}
		>
			{children}
			<StyledInput
				as={tag}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</StyledInputWrapper>
	);
}
