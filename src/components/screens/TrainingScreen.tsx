import '../../css/TrainingScreen.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Exercise from '../exercies/Exercise';
import { TabelElementType } from '../../models/trainingType';
import {
	useGetTrainingByIdQuery,
	useUpdateTrainingMutation,
	useUpdateTrainingDataMutation,
	useUpdateTrainingNameMutation,
	useUpdateTrainingTimeMutation,
} from '../../app/slices/trainingApiSlice';

const TrainingScreen = () => {
	const [time, setTime] = useState<string>('');
	const [timeStart, setTimeStart] = useState<string>('');
	const [timeEnd, setTimeEnd] = useState<string>('');
	const [trainingName, setTrainingName] = useState<string>('');
	const [changeTrainingName, setChangeTrainingName] = useState<boolean>(false);

	const { id } = useParams() as { id: string };

	//trainingAPI slice hooks
	const { data: training } = useGetTrainingByIdQuery({ id });
	const [updateTrainingData] = useUpdateTrainingDataMutation();
	const [updateTraining, { isError }] = useUpdateTrainingMutation();
	const [updateTrainingName] = useUpdateTrainingNameMutation();
	const [updateTrainingTime] = useUpdateTrainingTimeMutation();

	useEffect(() => {
		if (training) {
			setTime(training.trainingDate.toString().substring(0, 10));
			setTrainingName(training.trainingName);

			if (training.timeStart) {
				setTimeStart(training.timeStart);
			}
			if (training.timeEnd) {
				setTimeEnd(training.timeEnd);
			}
		}
	}, [training]);

	// function to update changes in time
	const handleTime = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const newDate = new Date(e.target.value);
		await updateTrainingData({ id, trainingDate: newDate });
	};
	const handleTimeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateTrainingTime({ id, timeStart: e.target.value });
	};
	const handleTimeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateTrainingTime({ id, timeStart: timeStart, timeEnd: e.target.value });
	};
	// function to update changes in exercise
	const updateHandlerTrainingName = async () => {
		await updateTrainingName({ id, trainingName: trainingName });
	};
	const updateTrainingHandler = async (newTraining: TabelElementType[][]) => {
		await updateTraining({ id, exercise: newTraining });
	};
	const handleDeleteSeries = useCallback(
		(exerciseIndex: number, seriesIndex: number) => {
			if (training?.exercise) {
				const newTraining = [...training.exercise];
				newTraining[exerciseIndex] = newTraining[exerciseIndex].filter(
					(series, index) => index !== seriesIndex
				);
				if (newTraining[exerciseIndex].length === 0) {
					newTraining.splice(exerciseIndex, 1);
				}
				updateTrainingHandler(newTraining);
			}
		},
		[training, updateTrainingHandler]
	);

	const handleAddNewSeries = useCallback(
		(exerciseIndex: number) => {
			if (training?.exercise) {
				const newTraining = [...training.exercise];
				const newSeries = newTraining[exerciseIndex].slice(-1)[0];
				const updateNewTraining = [...newTraining[exerciseIndex]];
				updateNewTraining.push(newSeries);
				newTraining[exerciseIndex] = updateNewTraining;
				updateTrainingHandler(newTraining);
			}
		},
		[training, updateTrainingHandler]
	);

	const handleChangeWeight = useCallback(
		(exerciseIndex: number, seriesIndex: number, weightState: number) => {
			if (training?.exercise) {
				const newTraining = [...training.exercise];
				const updateNewTraining = [...newTraining[exerciseIndex]];
				updateNewTraining[seriesIndex] = {
					...updateNewTraining[seriesIndex],
					weight: weightState,
				};
				newTraining[exerciseIndex] = updateNewTraining;
				updateTrainingHandler(newTraining);
			}
		},
		[training, updateTrainingHandler]
	);

	const handleChangeRepeat = useCallback(
		(exerciseIndex: number, seriesIndex: number, repeatState: number) => {
			if (training?.exercise) {
				const newTraining = [...training.exercise];
				const updateNewTraining = [...newTraining[exerciseIndex]];
				updateNewTraining[seriesIndex] = {
					...updateNewTraining[seriesIndex],
					repeat: repeatState,
				};
				newTraining[exerciseIndex] = updateNewTraining;
				updateTrainingHandler(newTraining);
			}
		},
		[training, updateTrainingHandler]
	);

	return (
		<section className='trainingScreen'>
			<h2>Przebieg treningu</h2>
			<div className='trainingScreen__info'>
				<div className='trainingScreen__info-name'>
					<div className='trainingScreen__info-name-box'>
						<p>{trainingName}</p>
						<img
							src='../../img/edit.PNG'
							title='zmień nazwę'
							onClick={() => setChangeTrainingName(!changeTrainingName)}
						/>
					</div>
					{changeTrainingName && (
						<input
							type='text'
							id='trainingName-input'
							name='trainingName-input'
							value={trainingName}
							onChange={(e) => {
								setTrainingName(e.target.value);
							}}
							onBlur={() => {
								updateHandlerTrainingName();
								setChangeTrainingName(false);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									updateHandlerTrainingName();
									setChangeTrainingName(false);
								}
							}}
						/>
					)}
				</div>
				<div className='trainingScreen__info-datetime'>
					<div className='trainingScreen__info-datetime-date'>
						<label htmlFor='datetime-input-start'>Data treningu:</label>
						<input
							type='date'
							id='datetime-input-start'
							name='datetime-start'
							value={time}
							onChange={(e) => handleTime(e)}
						/>
					</div>
					<div className='trainingScreen__info-datetime-time'>
						<label htmlFor='datetime-input-start'>Czas rozpoczęcia:</label>
						<input
							type='time'
							id='datetime-input-start'
							name='datetime-start'
							value={timeStart}
							onChange={(e) => {
								setTimeStart(e.target.value);
							}}
							onBlur={(e) => handleTimeStart(e)}
						/>
					</div>
					<div className='trainingScreen__info-datetime-time'>
						<label htmlFor='datetime-input-end'>Czas zakończenia:</label>
						<input
							type='time'
							id='datetime-input-end'
							name='datetime-end'
							value={timeEnd}
							onChange={(e) => {
								setTimeEnd(e.target.value);
							}}
							onBlur={(e) => handleTimeEnd(e)}
						/>
					</div>
				</div>
			</div>
			{isError && (
				<p className='errorText trainingScreen-errorText'>Błąd połaczenia</p>
			)}
			<div className='trainingScreen__exerciesList'>
				<div>
					{training?.exercise &&
						training?.exercise.map((exercise, exerciseIndex) => (
							<div
								className='trainingScreen__exerciesList-box'
								key={exerciseIndex}
							>
								<h3>{`Ćwiczenie ${exerciseIndex + 1}`}</h3>
								{exercise &&
									exercise.length > 0 &&
									exercise.map(
										(series: TabelElementType, seriesIndex: number) => (
											<Exercise
												key={seriesIndex}
												name={series.name}
												repeat={series.repeat}
												weight={series.weight}
												onDelete={() =>
													handleDeleteSeries(exerciseIndex, seriesIndex)
												}
												onChangeWeight={(weightState) => {
													handleChangeWeight(
														exerciseIndex,
														seriesIndex,
														weightState
													);
												}}
												onChangeRepeat={(repeatState) => {
													handleChangeRepeat(
														exerciseIndex,
														seriesIndex,
														repeatState
													);
												}}
											/>
										)
									)}
								{exercise?.length > 0 && (
									<div className='trainingScreen__exerciesList-box-btn'>
										<button
											onClick={() => {
												handleAddNewSeries(exerciseIndex);
											}}
										>
											Dodaj serię
										</button>
									</div>
								)}
							</div>
						))}
				</div>
				<button className='trainingScreen__exerciesList-add-btn'>
					Dodaj Ćwiczenie
				</button>
			</div>
		</section>
	);
};

export default TrainingScreen;
