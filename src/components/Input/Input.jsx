import StyledInput from './Input.styled';
import StyledLabel from './label.styled';
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
	label,
}) {
	const tag =
		(type === 'text' || type === undefined) && shape === 'square'
			? 'textarea'
			: 'input';

	const content = (
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
				id="name"
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				type={type}
				checked={checked}
			/>
		</StyledInputWrapper>
	);
	return label ? (
		<StyledLabel htmlFor="name">
			{type === 'checkbox' || type === 'radio'
				? [content, label]
				: [label, ':', content]}
		</StyledLabel>
	) : (
		content
	);
}
