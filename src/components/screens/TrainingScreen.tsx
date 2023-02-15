import './trainingscreen.css';
import { useState, useRef } from 'react';
import Exercise from '../exercies/Exercise';

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
	const tabel = [
		[
			{
				name: 'Wyciskanie sztangi na ławce płaskiej',
				repeat: 10,
				weight: 60,
			},
			{
				name: 'Wyciskanie sztangi na ławce płaskiej',
				repeat: 8,
				weight: 70,
			},
			{
				name: 'Wyciskanie sztangi na ławce płaskiej',
				repeat: 6,
				weight: 70,
			},
			{
				name: 'Wyciskanie sztangi na ławce płaskiej',
				repeat: 4,
				weight: 70,
			},
		],
		[
			{
				name: 'Wyciskanie hantelek na ławce dodatniej',
				repeat: 10,
				weight: 44,
			},
			{
				name: 'Wyciskanie hantelek na ławce dodatniej',
				repeat: 8,
				weight: 44,
			},
			{
				name: 'Wyciskanie hantelek na ławce dodatniej',
				repeat: 6,
				weight: 44,
			},
		],
		[
			{
				name: 'Wyciskanie hantelek nad głowę siedząc',
				repeat: 10,
				weight: 32,
			},
			{
				name: 'Wyciskanie hantelek nad głowę siedząc',
				repeat: 8,
				weight: 32,
			},
			{
				name: 'Wyciskanie hantelek nad głowę siedząc',
				repeat: 8,
				weight: 32,
			},
		],
		[
			{
				name: 'Unoszenie ramion w przód z wykorzystaniem wyciągu dolnego',
				repeat: 10,
				weight: 14,
			},
			{
				name: 'Unoszenie ramion w przód z wykorzystaniem wyciągu dolnego',
				repeat: 10,
				weight: 14,
			},
			{
				name: 'Unoszenie ramion w przód z wykorzystaniem wyciągu dolnego',
				repeat: 10,
				weight: 14,
			},
		],
		[
			{
				name: 'Unoszenie ramion bokiem z wykorzystaniem wyciągu dolnego',
				repeat: 10,
				weight: 14,
			},
			{
				name: 'Unoszenie ramion bokiem z wykorzystaniem wyciągu dolnego',
				repeat: 10,
				weight: 14,
			},
			{
				name: 'Unoszenie ramion bokiem z wykorzystaniem wyciągu dolnego',
				repeat: 10,
				weight: 14,
			},
		],
		[
			{
				name: 'Pompki na poręczach (Dipy)',
				repeat: 10,
				weight: 0,
			},
			{
				name: 'Pompki na poręczach (Dipy)',
				repeat: 10,
				weight: 0,
			},
			{
				name: 'Pompki na poręczach (Dipy)',
				repeat: 10,
				weight: 0,
			},
		],
		[
			{
				name: 'Spięcia brzucha z linkami wyciągu górnego (Cable crunch)',
				repeat: 10,
				weight: 14,
			},
			{
				name: 'Spięcia brzucha z linkami wyciągu górnego (Cable crunch)',
				repeat: 10,
				weight: 14,
			},
			{
				name: 'Spięcia brzucha z linkami wyciągu górnego (Cable crunch)',
				repeat: 10,
				weight: 14,
			},
		],
	];

	return (
		<section className='trainingScreen'>
			<h2>Przebieg treningu</h2>
			<div>
				<div className='trainingScreen__datetime'>
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
					<label htmlFor='datetime-input-end'>
						Data i godzina zakończenia:
					</label>
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
						Godzina zakończenia nie może być wcześniejsza niż godzina
						rozpoczęcia
					</p>
				)}
			</div>
			<div className='trainingScreen__exerciesList'>
				<div>
					{tabel.map((item, index) => (
						<>
							<h3>{`Cwiczenie ${index + 1}`}</h3>
							{item.map((ex, index) => (
								<Exercise
									key={index}
									name={ex.name}
									series={index + 1}
									repeat={ex.repeat}
									weight={ex.weight}
								/>
							))}
							<button>Dodaj serię</button>
						</>
					))}
				</div>
				<button>Dodaj Ćwiczenie</button>
			</div>
		</section>
	);
};

export default TrainingScreen;
