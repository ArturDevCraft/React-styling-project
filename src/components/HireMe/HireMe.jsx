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
	const [newSkill, setNewSkill] = useState('');
	const newSkillClickHandler = () => {
		addSkill(newSkill);
		setNewSkill('');
	};
	const addButton = (
		<Button onClick={newSkillClickHandler} size="small" thickness="thin">
			Add <Icon type="plus" style={{ fontSize: '1.8em' }} />
		</Button>
	);
	return (
		<StyledWrapper>
			<Header>
				<span>Progress: Step {step}/3</span>
			</Header>
			<StyledHorizontalLine />
			<StyledRowWrapper $align="left" $rwd={true}>
				<StyledColumnWrapper $align="left">
					<RadioPlayer url="https://stream.rcs.revma.com/ye5kghkgcm0uv" />
				</StyledColumnWrapper>
				<StyledColumnWrapper style={{ flexGrow: 2 }}>
					<StyledColumnWrapper $align="center">
						{skills.map(({ name, level }) => (
							<Slider
								key={`skills-slider-name-${name}`}
								name={name}
								size="medium"
								value={level}
								min="0"
								max="10"
								label={name}
								thickness="thicker"
								onChange={(e) => setSkillLevel(name, e.target.value)}
							/>
						))}
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center" style={{ paddingTop: '1.6em' }}>
						<Input
							name="skill-name"
							size="medium"
							placeholder="Skill name"
							label={addButton}
							thickness="thin"
							onChange={(e) => setNewSkill(e.target.value)}
							value={newSkill}
						></Input>
					</StyledColumnWrapper>
				</StyledColumnWrapper>
			</StyledRowWrapper>
		</StyledWrapper>
	);
}
