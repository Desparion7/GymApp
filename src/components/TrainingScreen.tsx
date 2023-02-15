import './trainingscreen.css';
import { useState, useRef } from 'react';

const TrainingScreen = () => {
	const [startTime, setStartTime] = useState<string>();
	const [timeError, setTimeError] = useState<boolean>();

	const startTimeRef = useRef<HTMLInputElement>(null);
	const endTimeRef = useRef<HTMLInputElement>(null);

	const handelStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStartTime(e.target.value);
		handelEndTime();
	};
	const handelEndTime = () => {
		if (startTimeRef.current && endTimeRef.current) {
			const date1 = startTimeRef.current.value;
			const date2 = endTimeRef.current.value;

			const jsData1 = new Date(date1);
			const jsData2 = new Date(date2);
			if (jsData2 < jsData1) {
				setTimeError(true);
			}
			if (jsData2 > jsData1) {
				setTimeError(false);
			}
		}
	};

	return (
		<section className='trainingScreen'>
			<h2>Przebieg treningu</h2>
			<div className='trainingScreen_datetime'>
				<label htmlFor='datetime-input-start'>
					Data i godzina rozpoczęcia:
				</label>
				<input
					type='datetime-local'
					id='datetime-input-start'
					name='datetime-start'
					ref={startTimeRef}
					onChange={handelStartTime}
				/>
				<label htmlFor='datetime-input-end'>Data i godzina zakończenia:</label>
				<input
					type='datetime-local'
					id='datetime-input-end'
					name='datetime-end'
					min={startTime}
					ref={endTimeRef}
					onChange={handelEndTime}
				/>
			</div>
			{timeError && (
				<p className='errorText trainingScreen-errorText'>
					Godzina zakończenia nie może być wcześniejsza niż godzina rozpoczęcia
				</p>
			)}
		</section>
	);
};

export default TrainingScreen;
