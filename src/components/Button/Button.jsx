import StyledButton from './Button.styled';

export default function Button({
	children,
	onClick,
	size,
	width,
	style,
	shape,
}) {
	return (
		<StyledButton
			onClick={onClick}
			size={size}
			width={width}
			style={style}
			shape={shape}
		>
			{children}
		</StyledButton>
	);
}
