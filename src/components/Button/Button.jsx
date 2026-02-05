import StyledButton from './Button.styled';

export default function Button({
	children,
	onClick,
	type,
	width,
	style,
	shape,
}) {
	return (
		<StyledButton
			onClick={onClick}
			type={type}
			width={width}
			style={style}
			shape={shape}
		>
			{children}
		</StyledButton>
	);
}
