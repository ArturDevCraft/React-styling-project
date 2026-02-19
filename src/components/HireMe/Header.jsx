import { useTheme } from 'styled-components';
import StyledHeader from '../Header.styled';
import Button from '../Button';
import Icon from '../Icon';
import StyledRowWrapper from '../RowWrapper.styled';
import StyledColumnWrapper from '../ColumnWrapper.styled';
export default function Header({ children }) {
	const { toggleTheme, color, name: currentTheme } = useTheme();
	return (
		<StyledHeader>
			<StyledColumnWrapper>
				<Icon type="logo" style={{ fontSize: '5em', color: color.accent }} />
			</StyledColumnWrapper>
			<StyledColumnWrapper $align="center">
				<h2>Hire me! - candidate profile generator</h2>
				{children}
			</StyledColumnWrapper>
			<StyledColumnWrapper $align="center">
				<Button
					onClick={toggleTheme}
					size="small"
					width="0.3"
					shape="square"
					tooltip="Toggle page theme"
					tooltipPosition="left"
				>
					<Icon type="brush" />
				</Button>
				<span>Current theme:</span>
				<span> {currentTheme.toUpperCase()}</span>
			</StyledColumnWrapper>
		</StyledHeader>
	);
}
