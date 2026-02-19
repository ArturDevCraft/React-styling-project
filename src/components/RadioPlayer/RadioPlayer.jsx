import { useRef, useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Slider from '../Slider';
import StyledRadioPlayer from './RadioPlayer.styled';
import StyledRowWrapper from '../RowWrapper.styled';
import { useTheme } from 'styled-components';

export default function RadioPlayer({ url }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const audioRef = useRef(null);
	const { color } = useTheme();

	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.load();
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const volumeChange = (e) => {
		audioRef.current.volume = e.target.value;
		setVolume(e.target.value);
	};

	const buttonContent = isPlaying ? (
		<Icon type="pause" />
	) : (
		<Icon type="play" />
	);

	const iconStyle = {
		fontSize: '3em',
		color: isPlaying ? color.accentHover : color.text,
	};

	return (
		<StyledRadioPlayer>
			<audio ref={audioRef} src={url} preload="none" />
			<StyledRowWrapper align="center">
				<Icon type="radio" style={iconStyle} />
				<Button
					onClick={togglePlay}
					size="small"
					width="0.3"
					shape="square"
					tooltip="Let's listen my favorite radio station!"
					tooltipPosition="right"
					tooltipSize="small"
				>
					{buttonContent}
				</Button>
			</StyledRowWrapper>
			<Slider
				value={volume}
				min="0"
				max="1"
				step="0.01"
				onChange={volumeChange}
				size="verySmall"
				tooltip="Change volume"
				tooltipPosition="bottom"
				tooltipSize="small"
			/>
		</StyledRadioPlayer>
	);
}
