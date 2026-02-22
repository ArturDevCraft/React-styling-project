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

	const { skills, position, setPosition } = useContext(HiremeContext);
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
						value={position.company}
						onChange={(e) =>
							setPosition({ ...position, company: e.target.value })
						}
					/>
				</StyledColumnWrapper>
				<StyledColumnWrapper>
					<Input
						label="Position title:"
						labelPosition="top"
						placeholder="e.g. Frontend Developer"
						name="position-title"
						onChange={(e) =>
							setPosition({ ...position, title: e.target.value })
						}
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
							checked={position.seniority === 'trainee'}
							onChange={(e) =>
								setPosition({ ...position, seniority: e.target.value })
							}
						/>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center">
						<Input
							label="Junior"
							value="junior"
							size="medium"
							name="seniority"
							checked={position.seniority === 'junior'}
							onChange={(e) =>
								setPosition({ ...position, seniority: e.target.value })
							}
							type="radio"
						/>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center">
						<Input
							label="Mid"
							value="mid"
							size="medium"
							name="seniority"
							onChange={(e) =>
								setPosition({ ...position, seniority: e.target.value })
							}
							checked={position.seniority === 'mid'}
							type="radio"
						/>
					</StyledColumnWrapper>
					<StyledColumnWrapper $align="center">
						<Input
							label="Senior"
							value="senior"
							size="medium"
							name="seniority"
							onChange={(e) =>
								setPosition({ ...position, seniority: e.target.value })
							}
							checked={position.seniority === 'senior'}
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
								onChange={(e) =>
									setPosition({ ...position, contractType: e.target.value })
								}
								checked={position.contractType === 'b2b'}
							/>
						</StyledColumnWrapper>
						<StyledColumnWrapper $align="center">
							<Input
								label="Mandate contract"
								value="mandate"
								size="medium"
								name="contract-type"
								type="radio"
								onChange={(e) =>
									setPosition({ ...position, contractType: e.target.value })
								}
								checked={position.contractType === 'mandate'}
							/>
						</StyledColumnWrapper>
						<StyledColumnWrapper $align="center">
							<Input
								label="Permanent"
								value="permanent"
								size="medium"
								name="contract-type"
								type="radio"
								onChange={(e) =>
									setPosition({ ...position, contractType: e.target.value })
								}
								checked={position.contractType === 'permanent'}
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
								onChange={(e) =>
									setPosition({ ...position, contractType: e.target.value })
								}
								checked={position.contractType === 'internship'}
							/>
						</StyledColumnWrapper>
						<StyledColumnWrapper $align="center">
							<Input
								label="Specific-task contract"
								value="specific-task"
								size="medium"
								name="contract-type"
								type="radio"
								onChange={(e) =>
									setPosition({ ...position, contractType: e.target.value })
								}
								checked={position.contractType === 'specific-task'}
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
					placeholder=" -- Select work mode --"
					onChange={(e) =>
						setPosition({ ...position, workMode: e.target.value })
					}
					value={position.workMode}
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
					value={position.mostImportantSkill}
					onChange={(e) =>
						setPosition({ ...position, mostImportantSkill: e.target.value })
					}
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
					value={position.description}
					onChange={(e) =>
						setPosition({ ...position, description: e.target.value })
					}
				/>
			</StyledRowWrapper>
		</>
	);
}
