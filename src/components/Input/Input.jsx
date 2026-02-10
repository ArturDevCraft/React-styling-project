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
	type,
	checked,
}) {
	const tag =
		(type === 'text' || type === undefined) && shape === 'square'
			? 'textarea'
			: 'input';
	return (
		<StyledInputWrapper
			size={size}
			width={width}
			style={style}
			shape={shape}
			onClick={onClick}
			checked={checked}
			type={type}
		>
			{children}
			<StyledInput
				as={tag}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				type={type}
				checked={checked}
			/>
		</StyledInputWrapper>
	);
}
