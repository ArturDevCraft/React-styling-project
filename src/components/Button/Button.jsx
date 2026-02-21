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
	thickness,
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
			$thickness={thickness}
		>
			{children}
		</StyledButton>
	);
}
