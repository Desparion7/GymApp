import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lastUsedExercise } from '../../app/api/userInfoSlice';
import { TabelElementType } from '../../models/trainingType';
import './addNewExercise.css';
import { useEffect, useState, useRef } from 'react';

interface AddPropsType {
	trainingToUpdate: TabelElementType[][] | undefined;
	handleAddNewExercise: (newTraining: TabelElementType[][]) => Promise<void>;
}

const AddNewExercise = ({
	trainingToUpdate,
	handleAddNewExercise,
}: AddPropsType) => {
	const [noExerciseError, setNoExerciseError] = useState<boolean>(false);
	const [exerciseNameInput, setExerciseNameInput] = useState<string>('');
	const [timeCheckbox, setTimeCheckbox] = useState<boolean>(false);
	const navigate = useNavigate();
	const lastExercise = useSelector(lastUsedExercise);

	const newExerciseRef = useRef<HTMLDivElement>(null);

	const updateTrainingHandler = (newTraining: TabelElementType[][]) => {
		handleAddNewExercise(newTraining);
	};

	useEffect(() => {
		if (newExerciseRef.current) {
			newExerciseRef.current.scrollIntoView();
		}
	}, [lastExercise]);

	//function do search for new exercise
	const handelSearchExercise = () => {
		navigate('/atlas');
	};
	//function do add new exercise from search
	const handelAddExercise = () => {
		if (trainingToUpdate) {
			let newExercise;
			if (lastExercise.exerciseName) {
				if (lastExercise.time) {
					newExercise = [
						{
							name: lastExercise.exerciseName,
							repeat: 1,
							weight: 0,
							time: lastExercise.time,
							url: lastExercise.url,
						},
					];
				} else {
					newExercise = [
						{
							name: lastExercise.exerciseName,
							repeat: 1,
							weight: 0,
							url: lastExercise.url,
						},
					];
				}
			} else {
				setNoExerciseError(true);
				return;
			}
			const newTraining = [...trainingToUpdate, newExercise];
			updateTrainingHandler(newTraining);
		}
	};

	//function do add new exercise from input
	const handelAddExerciseInput = () => {
		if (exerciseNameInput.trim().length !== 0) {
			if (trainingToUpdate) {
				let newExercise;
				if (timeCheckbox) {
					newExercise = [
						{
							name: exerciseNameInput,
							repeat: 1,
							weight: 0,
							time: true,
						},
					];
				} else {
					newExercise = [
						{
							name: exerciseNameInput,
							repeat: 1,
							weight: 0,
						},
					];
				}
				//
				setNoExerciseError(false);
				//
				const newTraining = [...trainingToUpdate, newExercise];
				updateTrainingHandler(newTraining);
			}
		} else {
			setNoExerciseError(true);
		}
	};
	return (
		<div className='addNewExercise'>
			<div className='addNewExercise__box1'>
				<div className='addNewExercise__box1-inputs'>
					<input
						placeholder='Wprowadz swoją nazwę'
						type='text'
						maxLength={50}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setExerciseNameInput(e.target.value);
						}}
					/>
					<div>
						<label htmlFor='timecheckbox'>Ćwiczenie czasowe</label>
						<input
							name='timecheckbox'
							id='timecheckbox'
							type='checkbox'
							onChange={() => {
								setTimeCheckbox(!timeCheckbox);
							}}
						/>
					</div>
				</div>

				<button
					className='addNewExercise__btn'
					onClick={handelAddExerciseInput}
				>
					Dodaj Ćwiczenie
				</button>
			</div>

			{noExerciseError && (
				<p className='errorText'>Nie wybrano żadnego ćwieczenia</p>
			)}
			<div className='addNewExercise__box2'>
				<div className='addNewExercise__box2-search'>
					{lastExercise.exerciseName ? (
						<div
							className=' addNewExercise__box2-text addNewExercise__box2-text-color'
							ref={newExerciseRef}
						>
							{lastExercise.exerciseName}
						</div>
					) : (
						<div className='addNewExercise__box2-text'>
							Wyszukaj ćwiczenie w atlasie
						</div>
					)}{' '}
					<button
						onClick={handelSearchExercise}
						className='addNewExercise__box2-search-btn'
					>
						<img
							src='../../img/search.PNG'
							alt='lupka'
							title='wyszukaj ćwiczenie'
						/>
					</button>
				</div>
				<button className='addNewExercise__btn' onClick={handelAddExercise}>
					Dodaj Ćwiczenie
				</button>
			</div>
		</div>
	);
};

export default AddNewExercise;
