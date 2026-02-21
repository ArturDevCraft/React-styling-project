import StyledColumnWrapper from '../ColumnWrapper.styled';
import Input from '../Input';
import StyledRowWrapper from '../RowWrapper.styled';

export default function Position({ step }) {
	// position: {
	//company: '',
	// 	title: '',
	// 	description: '',
	// 	seniority: '',
	// 	contractType: '',
	// 	workMode: '',
	// },
	return (
		<>
			<StyledRowWrapper $align="center" $rwd={true}>
				<h3>{step}. Position details</h3>
			</StyledRowWrapper>
			<StyledRowWrapper $align="justify" $rwd={true}>
				<StyledColumnWrapper>
					<Input
						label="Position title:"
						labelPosition="top"
						placeholder="e.g. Frontend Developer"
						name="position-title"
					/>
				</StyledColumnWrapper>
				<StyledColumnWrapper></StyledColumnWrapper>
			</StyledRowWrapper>
		</>
	);
}
