import { useRef, useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Slider from '../Slider';
import StyledRadioPlayer from './RadioPlayer.styled';

export default function RadioPlayer({ url }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const audioRef = useRef(null);

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

	return (
		<StyledRadioPlayer>
			<audio ref={audioRef} src={url} preload="none" />
			<Icon type="radio" style={{ fontSize: '3em' }} />
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
