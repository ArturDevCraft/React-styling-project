import { useTheme } from 'styled-components';
import RadioPlayer from '../RadioPlayer';
import StyledHeader from '../Header.styled';
import Button from '../Button';
import Icon from '../Icon';
import StyledWrapper from '../Wrapper.styled';
import StyledHorizontalLine from '../HorizontalLine.styled';

export default function HireMe() {
	const { toggleTheme } = useTheme();
	return (
		<StyledWrapper>
			<StyledHeader>
				<RadioPlayer url="https://stream.rcs.revma.com/ye5kghkgcm0uv" />
				<h2>Hire me! - candidate profile generator</h2>
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
			</StyledHeader>
			<StyledHorizontalLine />
		</StyledWrapper>
	);
}
