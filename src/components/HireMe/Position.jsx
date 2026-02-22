import { useContext } from 'react';
import { HiremeContext } from '../../store';
import StyledColumnWrapper from '../ColumnWrapper.styled';
import Input from '../Input';
import StyledRowWrapper from '../RowWrapper.styled';
import Select from '../Select';

export default function Position({ step }) {
	// position: {
	//company: '',
	// 	title: '',
	// 	description: '',
	// 	seniority: '',
	// 	contractType: '',
	// 	workMode: '',
	// },

	const { skills } = useContext(HiremeContext);
	return (
		<>
			<StyledRowWrapper $align="center" $rwd={true}>
				<h3>{step}. Position details</h3>
			</StyledRowWrapper>
			<StyledRowWrapper $align="justify" $rwd={true}>
				<StyledColumnWrapper $align="center">
					<Input
						label="Company name:"
						labelPosition="top"
						placeholder="e.g. Google"
						name="company-name"
					/>
				</StyledColumnWrapper>
				<StyledColumnWrapper>
					<Input
						label="Position title:"
						labelPosition="top"
						placeholder="e.g. Frontend Developer"
						name="position-title"
					/>
				</StyledColumnWrapper>
			</StyledRowWrapper>
			<StyledColumnWrapper $align="center" style={{ marginTop: '2em' }}>
				<span>
					<b>Seniority:</b>
				</span>
				<StyledRowWrapper $align="justify" style={{ flexWrap: 'wrap' }}>
					<StyledColumnWrapper $align="center">
						<Input
							label="Trainee"
							value="trainee"
							size="medium"
							name="seniority"
							type="radio"
						/>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center">
						<Input
							label="Junior"
							value="junior"
							size="medium"
							name="seniority"
							type="radio"
						/>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center">
						<Input
							label="Mid"
							value="mid"
							size="medium"
							name="seniority"
							type="radio"
						/>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center">
						<Input
							label="Senior"
							value="senior"
							size="medium"
							name="seniority"
							type="radio"
						/>
					</StyledColumnWrapper>
				</StyledRowWrapper>
			</StyledColumnWrapper>
			<StyledColumnWrapper $align="justify" style={{ marginTop: '2em' }}>
				<span>
					<b>Contract type:</b>
				</span>
				<StyledRowWrapper $align="justify" style={{ flexWrap: 'wrap' }}>
					<StyledColumnWrapper $align="left">
						<StyledColumnWrapper $align="center">
							<Input
								label="B2B"
								value="b2b"
								size="medium"
								name="contract-type"
								type="radio"
							/>
						</StyledColumnWrapper>
						<StyledColumnWrapper $align="center">
							<Input
								label="Mandate contract"
								value="mandate"
								size="medium"
								name="contract-type"
								type="radio"
							/>
						</StyledColumnWrapper>
						<StyledColumnWrapper $align="center">
							<Input
								label="Permanent"
								value="permanent"
								size="medium"
								name="contract-type"
								type="radio"
							/>
						</StyledColumnWrapper>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="left">
						<StyledColumnWrapper $align="center">
							<Input
								label="Internship"
								value="internship"
								size="medium"
								name="contract-type"
								type="radio"
							/>
						</StyledColumnWrapper>
						<StyledColumnWrapper $align="center">
							<Input
								label="Specific-task contract"
								value="specific-task"
								size="medium"
								name="contract-type"
								type="radio"
							/>
						</StyledColumnWrapper>
					</StyledColumnWrapper>
				</StyledRowWrapper>
			</StyledColumnWrapper>
			<StyledRowWrapper $align="justify" style={{ marginTop: '2em' }}>
				<Select
					label="Work mode:"
					labelPosition="top"
					name="work-mode"
					options={[
						{ name: 'On-site', value: 'on-site' },
						{ name: 'Remote', value: 'remote' },
						{ name: 'Hybrid', value: 'hybrid' },
					]}
				/>
			</StyledRowWrapper>
			<StyledRowWrapper $align="justify" style={{ marginTop: '2em' }}>
				<Select
					label="Most important skill:"
					labelPosition="top"
					name="most-important-skill"
					placeholder=" -- Select skill --"
					options={skills}
				/>
			</StyledRowWrapper>

			<StyledRowWrapper
				$align="justify"
				$rwd={true}
				style={{ marginTop: '2em' }}
			>
				<Input
					label="Position description:"
					labelPosition="top"
					placeholder="Describe the position expectations, requirements, and responsibilities."
					name="position-description"
					shape="rectangle"
				/>
			</StyledRowWrapper>
		</>
	);
}
