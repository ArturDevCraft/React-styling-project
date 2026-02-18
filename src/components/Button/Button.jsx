import StyledButton from './Button.styled';

export default function Button({
	children,
	onClick,
	size,
	width,
	style,
	shape,
	tooltip,
	tooltipPosition = 'top',
	tooltipSize,
}) {
	return (
		<StyledButton
			onClick={onClick}
			size={size}
			width={width}
			style={style}
			shape={shape}
			$tooltip={tooltip}
			$tooltipPosition={tooltipPosition}
			$tooltipSize={tooltipSize}
		>
			{children}
		</StyledButton>
	);
}
