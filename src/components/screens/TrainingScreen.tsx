import './trainingscreen.css';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Exercise from '../exercies/Exercise';
import { TabelElementType } from '../../models/trainingType';
import { useGetTrainingByIdMutation } from '../../app/slices/trainingApiSlice';

const TrainingScreen = () => {
	const [startTime, setStartTime] = useState<string>();
	const [timeError, setTimeError] = useState<boolean>();
	const [training, setTraining] = useState<TabelElementType[][]>();

	const startTimeRef = useRef<HTMLInputElement>(null);
	const endTimeRef = useRef<HTMLInputElement>(null);
	const { id } = useParams() as { id: string };

	const [getTrainingById, { data }] = useGetTrainingByIdMutation();

	const getTraining = async () => {
		await getTrainingById({ id });
		if (data) setTraining(data.exercise);
	};
	useEffect(() => {
		getTraining();
	}, []);
	useEffect(() => {
		if (data) setTraining(data.exercise);
	}, [data]);

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

	const handleDeleteSeries = (exerciseIndex: number, seriesIndex: number) => {
		if (training) {
			const newTraining = [...training];
			newTraining[exerciseIndex] = [
				...newTraining[exerciseIndex].slice(0, seriesIndex),
				...newTraining[exerciseIndex].slice(seriesIndex + 1),
			];
			setTraining(newTraining);
		}
	};

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
					{training &&
						training.map((exercise, exerciseIndex) => (
							<div key={exerciseIndex}>
								<h3>{`Cwiczenie ${exerciseIndex + 1}`}</h3>
								{exercise &&
									exercise.length > 0 &&
									exercise.map(
										(series: TabelElementType, seriesIndex: number) => (
											<Exercise
												key={seriesIndex}
												name={series.name}
												series={seriesIndex + 1}
												repeat={series.repeat}
												weight={series.weight}
												onDelete={() =>
													handleDeleteSeries(exerciseIndex, seriesIndex)
												}
											/>
										)
									)}
								<button>Dodaj serię</button>
							</div>
						))}
				</div>
				<button>Dodaj Ćwiczenie</button>
			</div>
		</section>
	);
};

export default TrainingScreen;
