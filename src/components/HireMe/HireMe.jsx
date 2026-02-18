import { useTheme } from 'styled-components';
import RadioPlayer from '../RadioPlayer';
import StyledHeader from '../Header.styled';
import Button from '../Button';
import Icon from '../Icon';

export default function HireMe() {
	const { toggleTheme } = useTheme();
	return (
		<section>
			<StyledHeader>
				<RadioPlayer url="https://stream.rcs.revma.com/ye5kghkgcm0uv" />
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
			<h1>Hire me! - candidate profile generator</h1>
		</section>
	);
}
