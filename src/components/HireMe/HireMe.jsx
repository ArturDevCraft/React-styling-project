import RadioPlayer from '../RadioPlayer';

import StyledWrapper from '../Wrapper.styled';
import StyledHorizontalLine from '../HorizontalLine.styled';
import StyledRowWrapper from '../RowWrapper.styled';
import StyledColumnWrapper from '../ColumnWrapper.styled';
import { useEffect, useState } from 'react';
import Header from './Header';

import Skills from './Skills';
import Button from '../Button';
import Icon from '../Icon';
import Position from './Position';
import useFormTimer from '../../hooks/useFormTimer';
import Summary from './Summary';

export default function HireMe() {
	const [step, setStep] = useState(1);
	const [duration, setDuration] = useState(null);

	const { startTimer, getDuration, time } = useFormTimer();
	const pages = [
		<Skills step={step} />,
		<Position step={step} />,
		<Summary step={step} duration={duration} />,
	];
	const maxStep = pages.length;

	useEffect(() => {
		if (step < 1) setStep(1);
		else if (step > maxStep) setStep(maxStep);
		if (step === 3) setDuration(getDuration(true));
	}, [step]);

	useEffect(() => {
		startTimer();
	}, []);

	return (
		<StyledWrapper>
			<Header>
				<span>
					Progress: Step {step}/{maxStep}
				</span>
			</Header>
			<StyledHorizontalLine />
			<StyledRowWrapper $align="left" $rwd={true}>
				<StyledColumnWrapper $align="center">
					<RadioPlayer url="https://stream.rcs.revma.com/ye5kghkgcm0uv" />

					<p style={{ fontWeight: 'bold' }}>Time: {time} minutes</p>
				</StyledColumnWrapper>
				<StyledColumnWrapper style={{ flexGrow: 2 }}>
					{typeof pages[step - 1] !== 'undefined' && pages[step - 1]}
					<StyledHorizontalLine />
					<StyledRowWrapper $align="justify">
						<Button
							type="cta"
							size="small"
							onClick={() => setStep(step - 1)}
							disabled={step === 1}
						>
							<Icon type="arrowLeft" style={{ fontSize: '1.8em' }} />
							Previous step
						</Button>
						<Button
							type="cta"
							size="small"
							onClick={() => setStep(step + 1)}
							disabled={step === maxStep}
						>
							Next step
							<Icon type="arrowRight" style={{ fontSize: '1.8em' }} />
						</Button>
					</StyledRowWrapper>
				</StyledColumnWrapper>
			</StyledRowWrapper>
		</StyledWrapper>
	);
}
