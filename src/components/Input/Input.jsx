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
	labelPosition,
}) {
	const inputRef = useRef(null);
	const handleClick = () => {
		inputRef.current.focus();
		onClick?.();
	};

	const tag =
		(type === 'text' || type === undefined) &&
		(shape === 'square' || shape === 'rectangle')
			? 'textarea'
			: 'input';

	const id =
		type === 'checkbox' || type === 'radio' ? `${name}-${value}` : name;

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
				id={id}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				type={type}
				checked={checked}
			/>
		</StyledInputWrapper>
	);

	const labelFor =
		type === 'checkbox' || type === 'radio' ? `${name}-${value}` : name;
	return label ? (
		<StyledLabel
			size={size}
			width={width}
			$labelPosition={labelPosition}
			htmlFor={labelFor}
			type={type}
		>
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
