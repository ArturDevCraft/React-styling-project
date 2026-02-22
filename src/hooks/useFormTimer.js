import { useRef, useCallback, useState, useContext } from 'react';

const useFormTimer = () => {
	const startTimeRef = useRef(null);
	const [time, setTime] = useState('0:00');
	const intervalId = useRef(null);

	function saveTimerInLocalStorage(state) {
		localStorage.setItem('HiremeYourCandidate-timer', JSON.stringify(state));
	}

	function getTimerFromLocalStorage() {
		const string = localStorage.getItem('HiremeYourCandidate-timer');
		const data = string ? JSON.parse(string) : null;
		return data;
	}

	const getDuration = useCallback((resetAfter = false) => {
		if (getTimerFromLocalStorage() !== null && startTimeRef.current === null) {
			startTimeRef.current = getTimerFromLocalStorage();
		}

		if (startTimeRef.current === null) return 0;

		const durationMs = Date.now() - startTimeRef.current;
		const durationSec = parseFloat((durationMs / 1000).toFixed(2));
		const minutes = Math.floor(durationSec / 60);
		const seconds = Math.floor(durationSec % 60);
		const durationFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
		if (resetAfter) {
			startTimeRef.current = null;
			saveTimerInLocalStorage(null);
		}

		return durationFormatted;
	}, []);

	const resetTimer = useCallback(() => {
		startTimeRef.current = null;
		if (intervalId.current) {
			clearInterval(intervalId.current);
			intervalId.current = null;
			saveTimerInLocalStorage(null);
		}
	}, []);

	const startInterval = () => {
		if (intervalId.current) {
			clearInterval(intervalId.current);
		}

		const id = setInterval(() => {
			const duration = getDuration();

			setTime(duration);
		}, 1000);
		intervalId.current = id;
	};

	const startTimer = useCallback(() => {
		if (getTimerFromLocalStorage() !== null && startTimeRef.current === null) {
			startTimeRef.current = getTimerFromLocalStorage();
		}

		if (startTimeRef.current === null && getTimerFromLocalStorage() === null) {
			startTimeRef.current = Date.now();
			saveTimerInLocalStorage(startTimeRef.current);
		}
		startInterval();
	}, []);

	return { startTimer, getDuration, resetTimer, time };
};

export default useFormTimer;
