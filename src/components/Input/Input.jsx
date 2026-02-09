import StyledInput from './Input.styled';

export default function Input({
	children,
	onClick,
	size,
	width,
	style,
	shape,
	placeholder,
}) {
	const tag = shape === 'square' ? 'textarea' : 'input';
	return (
		<StyledInput
			as={tag}
			onClick={onClick}
			size={size}
			width={width}
			style={style}
			shape={shape}
			placeholder={placeholder}
		>
			{children}
		</StyledInput>
	);
}
