import '../../css/TrainingScreen.css';
import { useState, useEffect, useCallback } from 'react';
import {
	useGetTrainingSetByIdQuery,
	useUpdateTrainingSetNameMutation,
	useUpdateTrainingSetMutation,
} from '../../app/slices/trainingSetApi';
import { useCreateNewTrainingMutation } from '../../app/slices/trainingApiSlice';

import { setlastUsedSetId } from '../../app/api/userInfoSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TabelElementType } from '../../models/trainingType';
import {
	handleDeleteSeries,
	handleAddNewSeries,
	handleChangeWeight,
	handleChangeRepeat,
} from '../../hooks/manageTraining';
import ChangeExercisePosition from '../UI/ChangeExercisePosition';
import Exercise from '../UI/Exercise';
import AddNewExercise from '../UI/AddNewExercise';
import ModalSpinner from '../UI/ModalSpinner';
import LoadingSpinner from '../UI/LoadingSpinner';

const MyPlanScreenEdit = () => {
	const [setName, setSetName] = useState<string>('');
	const [changeSetName, setChangeSetName] = useState<boolean>(true);
	const { id } = useParams() as { id: string };
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//trainingSetAPI slice hooks
	const { data: trainingSet, isLoading } = useGetTrainingSetByIdQuery({ id });
	const [updateTrainingSetName, { isLoading: loadingName }] =
		useUpdateTrainingSetNameMutation();
	const [updateTrainingSet, { isLoading: loadingSet }] =
		useUpdateTrainingSetMutation();
	const [
		createNewTraining,
		{ data: CreatedTraining, isLoading: loadingTraining },
	] = useCreateNewTrainingMutation();

	useEffect(() => {
		if (trainingSet) {
			setSetName(trainingSet.trainingName);
		}
	}, [trainingSet]);

	useEffect(() => {
		dispatch(setlastUsedSetId(id));
	}, []);

	useEffect(() => {
		if (CreatedTraining?._id) {
			navigate(`/profile/trening/${CreatedTraining._id}`);
		}
	}, [CreatedTraining]);

	const handelStartNewTraining = async () => {
		if (trainingSet) {
			const exercise = trainingSet.exercise;
			const trainingDate = new Date();
			const trainingName = trainingSet?.trainingName;
			await createNewTraining({ exercise, trainingDate, trainingName });
		}
	};

	// function to update Training set name
	const updateHandlerTrainingSetName = async () => {
		await updateTrainingSetName({ id, trainingName: setName });
	};
	// function to update Training set exercises
	const updateTrainingHandler = useCallback(
		async (newTraining: TabelElementType[][]) => {
			await updateTrainingSet({ id, exercise: newTraining });
		},
		[id]
	);

	return (
		<>
			{(loadingName || loadingSet || loadingTraining) && <ModalSpinner />}
			<section className='trainingScreen'>
				<h2>mój zestaw</h2>
				{isLoading && <LoadingSpinner />}
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
						<button className='greenBtn' onClick={handelStartNewTraining}>
							Rozpocznij trening z danym zestawem
						</button>
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
									<div className='trainingScreen__exerciesList-box-title'>
										<h3>{`Ćwiczenie ${exerciseIndex + 1}`}</h3>
										<div className='trainingScreen__exerciesList-box-title-btn'>
											<ChangeExercisePosition
												exerciseIndex={exerciseIndex}
												training={trainingSet}
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
													onDelete={() =>
														handleDeleteSeries(
															exerciseIndex,
															seriesIndex,
															trainingSet,
															updateTrainingHandler
														)
													}
													onChangeWeight={(weightState) => {
														handleChangeWeight(
															exerciseIndex,
															seriesIndex,
															weightState,
															trainingSet,
															updateTrainingHandler
														);
													}}
													onChangeRepeat={(repeatState) => {
														handleChangeRepeat(
															exerciseIndex,
															seriesIndex,
															repeatState,
															trainingSet,
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
														trainingSet,
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
						trainingToUpdate={trainingSet?.exercise}
						handleAddNewExercise={updateTrainingHandler}
					/>
				</div>
			</section>
		</>
	);
};

export default MyPlanScreenEdit;
