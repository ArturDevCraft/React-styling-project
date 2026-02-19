import RadioPlayer from '../RadioPlayer';
import StyledHeader from '../Header.styled';
import Button from '../Button';
import Icon from '../Icon';
import StyledWrapper from '../Wrapper.styled';
import StyledHorizontalLine from '../HorizontalLine.styled';
import StyledRowWrapper from '../RowWrapper.styled';
import StyledColumnWrapper from '../ColumnWrapper.styled';
import { useContext, useState } from 'react';
import Header from './Header';
import Input from '../Input';
import Slider from '../Slider';
import { HiremeContext } from '../../store';

export default function HireMe() {
	const [step, setStep] = useState(1);
	const { skills, addSkill, setSkillLevel } = useContext(HiremeContext);

	return (
		<StyledWrapper>
			<Header>
				<span>Progress: Step {step}/3</span>
			</Header>
			<StyledHorizontalLine />
			<StyledRowWrapper $align="left">
				<StyledColumnWrapper $align="left">
					<RadioPlayer url="https://stream.rcs.revma.com/ye5kghkgcm0uv" />
				</StyledColumnWrapper>
				<StyledColumnWrapper>
					<StyledColumnWrapper>
						{skills.map(({ name, level }) => (
							<>
								<Slider
									name={name}
									size="medium"
									value={level}
									min="0"
									max="10"
									label={name}
									thickness="thicker"
									onChange={(e) => setSkillLevel(name, e.target.value)}
								/>
							</>
						))}
					</StyledColumnWrapper>
					<Input size="small" placeholder="Skill name">
						{' '}
					</Input>
				</StyledColumnWrapper>
			</StyledRowWrapper>
		</StyledWrapper>
	);
}
