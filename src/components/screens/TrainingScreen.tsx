import './trainingScreen.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Exercise from '../exercies/Exercise';
import { TabelElementType } from '../../models/trainingType';
import {
	useGetTrainingByIdQuery,
	useUpdateTrainingMutation,
	useUpdateTrainingDataMutation,
	useUpdateTrainingNameMutation,
} from '../../app/slices/trainingApiSlice';

const TrainingScreen = () => {
	const [time, setTime] = useState<string>('');
	const [trainingName, setTrainingName] = useState<string>('');
	const { id } = useParams() as { id: string };

	const { data: training } = useGetTrainingByIdQuery({ id });

	const [updateTrainingData, { isError: isErrorDate, error: errorDate }] =
		useUpdateTrainingDataMutation();

	const [updateTraining, { isError, error }] = useUpdateTrainingMutation();
	const [updateTrainingName] = useUpdateTrainingNameMutation();

	useEffect(() => {
		if (training) {
			setTime(training.trainingDate.toString().substring(0, 10));
			setTrainingName(training.trainingName);
		}
	}, [training]);

	const handleTime = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const newDate = new Date(e.target.value);
		await updateTrainingData({ id, trainingDate: newDate });
	};
	const updateHandlerTrainingName = async () => {
		await updateTrainingName({ id, trainingName: trainingName });
	};

	const updateTrainingHandler = async (newTraining: TabelElementType[][]) => {
		await updateTraining({ id, exercise: newTraining });
	};
	const handleDeleteSeries = (exerciseIndex: number, seriesIndex: number) => {
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
	};
	const handleAddNewSeries = (exerciseIndex: number) => {
		if (training?.exercise) {
			const newTraining = [...training.exercise];
			const newSeries = newTraining[exerciseIndex].slice(-1)[0];
			const updateNewTraining = [...newTraining[exerciseIndex]];
			updateNewTraining.push(newSeries);
			newTraining[exerciseIndex] = updateNewTraining;
			updateTrainingHandler(newTraining);
		}
	};
	const handleChangeWeight = (
		exerciseIndex: number,
		seriesIndex: number,
		weightState: number
	) => {
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
	};
	const handleChangeRepeat = (
		exerciseIndex: number,
		seriesIndex: number,
		repeatState: number
	) => {
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
	};

	return (
		<section className='trainingScreen'>
			<h2>Przebieg treningu</h2>
			<div className='trainingScreen__info'>
				<div className='trainingScreen__info-name'>
					<label htmlFor='trainingName-input'>Nazwa:</label>
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
						}}
					/>
				</div>
				<div className='trainingScreen__info-date'>
					<label htmlFor='datetime-input-start'>Data treningu:</label>
					<input
						type='date'
						id='datetime-input-start'
						name='datetime-start'
						value={time}
						onChange={(e) => handleTime(e)}
					/>
				</div>
			</div>
			{isError && (
				<p className='errorText trainingScreen-errorText'>Błąd połaczenia</p>
			)}
			<div className='trainingScreen__exerciesList'>
				<div>
					{training?.exercise &&
						training?.exercise.map((exercise, exerciseIndex) => (
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
									<button
										onClick={() => {
											handleAddNewSeries(exerciseIndex);
										}}
									>
										Dodaj serię
									</button>
								)}
							</div>
						))}
				</div>
				<button>Dodaj Ćwiczenie</button>
			</div>
		</section>
	);
};

export default TrainingScreen;
