import '../../css/TrainingScreen.css';
import { useState, useEffect, useCallback } from 'react';
import {
	useGetTrainingSetByIdQuery,
	useUpdateTrainingSetNameMutation,
	useUpdateTrainingSetMutation,
} from '../../app/slices/trainingSetApi';
import { setlastUsedSetId } from '../../app/api/userInfoSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TabelElementType } from '../../models/trainingType';
import Exercise from '../UI/Exercise';
import AddNewExercise from '../UI/AddNewExercise';

const MyPlanScreen = () => {
	const [setName, setSetName] = useState<string>('');
	const [changeSetName, setChangeSetName] = useState<boolean>(false);
	const { id } = useParams() as { id: string };
	const dispatch = useDispatch();

	//trainingSetAPI slice hooks
	const { data: trainingSet } = useGetTrainingSetByIdQuery({ id });
	const [updateTrainingSetName] = useUpdateTrainingSetNameMutation();
	const [updateTrainingSet] = useUpdateTrainingSetMutation();

	useEffect(() => {
		if (trainingSet) {
			setSetName(trainingSet.trainingName);
		}
	}, [trainingSet]);

	useEffect(() => {
		dispatch(setlastUsedSetId(id));
	}, []);

	// function to update Training set name
	const updateHandlerTrainingSetName = async () => {
		await updateTrainingSetName({ id, trainingName: setName });
	};
	// function to update Training set exercises
	const updateTrainingHandler = async (newTraining: TabelElementType[][]) => {
		await updateTrainingSet({ id, exercise: newTraining });
	};

	const handleDeleteSeries = useCallback(
		(exerciseIndex: number, seriesIndex: number) => {
			if (trainingSet?.exercise) {
				const newTraining = [...trainingSet.exercise];
				newTraining[exerciseIndex] = newTraining[exerciseIndex].filter(
					(series, index) => index !== seriesIndex
				);
				if (newTraining[exerciseIndex].length === 0) {
					newTraining.splice(exerciseIndex, 1);
				}
				updateTrainingHandler(newTraining);
			}
		},
		[trainingSet, updateTrainingHandler]
	);

	const handleAddNewSeries = useCallback(
		(exerciseIndex: number) => {
			if (trainingSet?.exercise) {
				const newTraining = [...trainingSet.exercise];
				const newSeries = newTraining[exerciseIndex].slice(-1)[0];
				const updateNewTraining = [...newTraining[exerciseIndex]];
				updateNewTraining.push(newSeries);
				newTraining[exerciseIndex] = updateNewTraining;
				updateTrainingHandler(newTraining);
			}
		},
		[trainingSet, updateTrainingHandler]
	);

	const handleChangeWeight = useCallback(
		(exerciseIndex: number, seriesIndex: number, weightState: number) => {
			if (trainingSet?.exercise) {
				const newTraining = [...trainingSet.exercise];
				const updateNewTraining = [...newTraining[exerciseIndex]];
				updateNewTraining[seriesIndex] = {
					...updateNewTraining[seriesIndex],
					weight: weightState,
				};
				newTraining[exerciseIndex] = updateNewTraining;
				updateTrainingHandler(newTraining);
			}
		},
		[trainingSet, updateTrainingHandler]
	);
	const handleChangeRepeat = useCallback(
		(exerciseIndex: number, seriesIndex: number, repeatState: number) => {
			if (trainingSet?.exercise) {
				const newTraining = [...trainingSet.exercise];
				const updateNewTraining = [...newTraining[exerciseIndex]];
				updateNewTraining[seriesIndex] = {
					...updateNewTraining[seriesIndex],
					repeat: repeatState,
				};
				newTraining[exerciseIndex] = updateNewTraining;
				updateTrainingHandler(newTraining);
			}
		},
		[trainingSet, updateTrainingHandler]
	);

	return (
		<section className='trainingScreen'>
			<h2>mój zestaw</h2>
			<div>
				<div className='trainingScreen__info-name'>
					<div className='trainingScreen__info-name-box'>
						<p>{setName}</p>
						<img
							src='../../img/edit.PNG'
							title='zmień nazwę'
							onClick={() => setChangeSetName(!changeSetName)}
						/>
					</div>
					{changeSetName && (
						<input
							type='text'
							id='trainingName-input'
							name='trainingName-input'
							maxLength={50}
							value={setName}
							onChange={(e) => {
								setSetName(e.target.value);
							}}
							onBlur={() => {
								updateHandlerTrainingSetName();
								setChangeSetName(false);
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									updateHandlerTrainingSetName();
									setChangeSetName(false);
								}
							}}
						/>
					)}
				</div>
			</div>
			<div className='trainingScreen__exerciesList'>
				<div>
					{trainingSet?.exercise &&
						trainingSet?.exercise.map((exercise, exerciseIndex) => (
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
												time={series.time}
												url={series.url}
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
				<AddNewExercise
					trainingToUpdate={trainingSet?.exercise}
					handleAddNewExercise={updateTrainingHandler}
				/>
			</div>
		</section>
	);
};

export default MyPlanScreen;
