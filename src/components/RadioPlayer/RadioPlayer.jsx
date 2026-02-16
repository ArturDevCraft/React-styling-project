import { useRef, useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default function RadioPlayer({ url }) {
	const [isPlaying, setIsPlaying] = useState(false);
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

	const buttonContent = isPlaying ? (
		<Icon type="pause" />
	) : (
		<Icon type="play" />
	);

	return (
		<div>
			<audio ref={audioRef} src={url} preload="none" />
			<Button onClick={togglePlay} size="small" width="0.45" shape="round">
				{buttonContent}
			</Button>
		</div>
	);
}
