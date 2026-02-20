import StyledInput from './Input.styled';
import StyledLabel from './label.styled';
import StyledInputWrapper from './InputWrapper.styled';
import { useRef } from 'react';

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
	thickness,
}) {
	const inputRef = useRef(null);
	const handleClick = () => {
		inputRef.current.focus();
		onClick?.();
	};

	const tag =
		(type === 'text' || type === undefined) && shape === 'square'
			? 'textarea'
			: 'input';

	const content = (
		<StyledInputWrapper
			size={size}
			width={width}
			$thickness={thickness}
			style={style}
			shape={shape}
			onClick={handleClick}
			checked={checked}
			type={type}
		>
			{children}
			<StyledInput
				ref={inputRef}
				as={tag}
				id={name}
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
		<StyledLabel size={size} width={width} htmlFor={name}>
			{type === 'checkbox' || type === 'radio' ? (
				<>
					{content}
					{label}
				</>
			) : (
				<>
					{label}
					{content}
				</>
			)}
		</StyledLabel>
	) : (
		content
	);
}
