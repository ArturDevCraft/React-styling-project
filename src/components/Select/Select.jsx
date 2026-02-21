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
	children,
	label,
	labelPosition,
}) {
	const content = (
		<StyledSelect
			id={name}
			name={name}
			size={size}
			width={width}
			style={style}
			shape={shape}
			onClick={onClick}
			onChange={onChange}
			value={value}
			innerContent={children}
		>
			{placeholder && <Option>{placeholder}</Option>}
			{options.map(({ name: selectName, value: selectValue }) => (
				<Option
					key={`${name}-${selectValue}-${selectName.replace(/\s+/g, '')}`}
					value={selectValue}
				>
					{selectName}
				</Option>
			))}
		</StyledSelect>
	);
	return label ? (
		<StyledLabel size={size} $labelPosition={labelPosition} htmlFor={name}>
			{label}
			{content}
		</StyledLabel>
	) : (
		content
	);
}
