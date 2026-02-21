import { useContext, useState } from 'react';
import { HiremeContext } from '../../store';
import Input from '../Input';
import Slider from '../Slider';
import StyledRowWrapper from '../RowWrapper.styled';
import StyledColumnWrapper from '../ColumnWrapper.styled';
import Button from '../Button';
import Icon from '../Icon';

export default function Skills({ step }) {
	const { skills, addSkill, deleteSkill, setSkillLevel } =
		useContext(HiremeContext);
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

	const deleteButton = (name) => (
		<Button
			key={`deleteButton-${name}`}
			onClick={() => deleteSkill(name)}
			type="clear"
			tooltip="Delete skill"
		>
			<Icon type="trash" variant="regular" />
		</Button>
	);
	return (
		<>
			<StyledColumnWrapper $align="center">
				<h3>{step}. Set skill levels</h3>
				{skills.map(({ name, level }) => (
					<StyledRowWrapper key={`skill-row-${name}`} $align="left">
						<Slider
							key={`skills-slider-name-${name}`}
							name={name}
							size="medium"
							value={level}
							min="0"
							max="10"
							label={name}
							thickness="thicker"
							tooltip={level}
							tooltipPosition="top"
							onChange={(e) => setSkillLevel(name, e.target.value)}
						>
							{deleteButton(name)}
						</Slider>
					</StyledRowWrapper>
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
		</>
	);
}
