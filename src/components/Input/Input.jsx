import StyledInput from './Input.styled';
import StyledInputWrapper from './InputWrapper.styled';

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
		<StyledInputWrapper
			onClick={onClick}
			size={size}
			width={width}
			style={style}
			shape={shape}
		>
			{children}
			<StyledInput as={tag} placeholder={placeholder} />
		</StyledInputWrapper>
	);
}
