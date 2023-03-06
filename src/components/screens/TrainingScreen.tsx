import '../../css/TrainingScreen.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Exercise from '../UI/Exercise';
import { TabelElementType } from '../../models/trainingType';
import {
	useGetTrainingByIdQuery,
	useUpdateTrainingMutation,
	useUpdateTrainingDataMutation,
	useUpdateTrainingNameMutation,
	useUpdateTrainingTimeMutation,
} from '../../app/slices/trainingApiSlice';
import { setlastUsedTrainingId } from '../../app/api/userInfoSlice';
import { useDispatch } from 'react-redux';
import AddNewExercise from '../UI/AddNewExercise';
import {
	handleDeleteSeries,
	handleAddNewSeries,
	handleChangeWeight,
	handleChangeRepeat,
	handleChangeCheck,
} from '../../hooks/manageTraining';
import ModalSpinner from '../UI/ModalSpinner';
import ChangeExercisePosition from '../UI/ChangeExercisePosition';

const TrainingScreen = () => {
	const [time, setTime] = useState<string>('');
	const [timeStart, setTimeStart] = useState<string>('');
	const [timeEnd, setTimeEnd] = useState<string>('');
	const [trainingName, setTrainingName] = useState<string>('');
	const [changeTrainingName, setChangeTrainingName] = useState<boolean>(false);

	const dispatch = useDispatch();

	const { id } = useParams() as { id: string };

	//trainingAPI slice hooks
	const { data: training } = useGetTrainingByIdQuery({ id });
	const [updateTrainingData, { isLoading: loadingData }] =
		useUpdateTrainingDataMutation();
	const [updateTraining, { isError, isLoading }] = useUpdateTrainingMutation();
	const [updateTrainingName, { isLoading: loadingName }] =
		useUpdateTrainingNameMutation();
	const [updateTrainingTime, { isLoading: loadingTime }] =
		useUpdateTrainingTimeMutation();

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

	// Set to state training Id
	useEffect(() => {
		dispatch(setlastUsedTrainingId(id));
	}, []);

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

	return (
		<section className='trainingScreen'>
			{(isLoading || loadingName || loadingTime || loadingData) && (
				<ModalSpinner />
			)}
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
							maxLength={50}
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
								<div className='trainingScreen__exerciesList-box-title'>
									<h3>{`Ćwiczenie ${exerciseIndex + 1}`}</h3>
									<div className='trainingScreen__exerciesList-box-title-btn'>
										<ChangeExercisePosition
											exerciseIndex={exerciseIndex}
											training={training}
											updateTrainingHandler={updateTrainingHandler}
										/>
									</div>
								</div>
								{exercise &&
									exercise.length > 0 &&
									exercise.map(
										(series: TabelElementType, seriesIndex: number) => (
											<Exercise
												key={seriesIndex}
												name={series.name}
												repeat={series.repeat}
												weight={series.weight}
												time={series.time}
												url={series.url}
												check={series.check}
												isTraining={true}
												onDelete={() =>
													handleDeleteSeries(
														exerciseIndex,
														seriesIndex,
														training,
														updateTrainingHandler
													)
												}
												onChangeWeight={(weightState) => {
													handleChangeWeight(
														exerciseIndex,
														seriesIndex,
														weightState,
														training,
														updateTrainingHandler
													);
												}}
												onChangeRepeat={(repeatState) => {
													handleChangeRepeat(
														exerciseIndex,
														seriesIndex,
														repeatState,
														training,
														updateTrainingHandler
													);
												}}
												onChangeCheck={(checkState) => {
													handleChangeCheck(
														exerciseIndex,
														seriesIndex,
														checkState,
														training,
														updateTrainingHandler
													);
												}}
											/>
										)
									)}
								{exercise?.length > 0 && (
									<div className='trainingScreen__exerciesList-box-btn'>
										<button
											onClick={() => {
												handleAddNewSeries(
													exerciseIndex,
													training,
													updateTrainingHandler
												);
											}}
										>
											Dodaj serię
										</button>
									</div>
								)}
							</div>
						))}
				</div>
				<AddNewExercise
					trainingToUpdate={training?.exercise}
					handleAddNewExercise={updateTrainingHandler}
				/>
			</div>
		</section>
	);
};

export default TrainingScreen;
