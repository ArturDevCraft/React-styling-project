import RadioPlayer from '../RadioPlayer';

import StyledWrapper from '../Wrapper.styled';
import StyledHorizontalLine from '../HorizontalLine.styled';
import StyledRowWrapper from '../RowWrapper.styled';
import StyledColumnWrapper from '../ColumnWrapper.styled';
import { useContext, useState } from 'react';
import Header from './Header';

import Skills from './Skills';

export default function HireMe() {
	const [step, setStep] = useState(1);

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
					<Skills step={step} />
				</StyledColumnWrapper>
			</StyledRowWrapper>
		</StyledWrapper>
	);
}
