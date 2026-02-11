import StyledSelect from './Select.styled';
import StyledLabel from './label.styled';
import Option from './Option';

export default function Select({
	onClick,
	onChange,
	name,
	value,
	size,
	width,
	style,
	shape,
	options,
	placeholder,
	checked,
	label,
}) {
	const content = (
		<StyledSelect
			name={name}
			size={size}
			width={width}
			style={style}
			shape={shape}
			onClick={onClick}
		>
			<Option
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				type={type}
				checked={checked}
			/>
		</StyledSelect>
	);
	return label ? (
		<StyledLabel htmlFor="name">
			{label}
			{content}
		</StyledLabel>
	) : (
		content
	);
}
