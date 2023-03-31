import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { lastUsedExercise, setlastExercise } from '../../app/api/userInfoSlice';
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
	const lastExercise = useSelector(lastUsedExercise);
	const [noExerciseError, setNoExerciseError] = useState<boolean>(false);
	const [exerciseNameInput, setExerciseNameInput] = useState<string>('');
	const [timeCheckbox, setTimeCheckbox] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const newExerciseRef = useRef<HTMLDivElement>(null);

	const updateTrainingHandler = (newTraining: TabelElementType[][]) => {
		handleAddNewExercise(newTraining);
	};

	useEffect(() => {
		if (newExerciseRef.current) {
			newExerciseRef.current.scrollIntoView();
		}
		if (lastExercise.exerciseName) {
			setExerciseNameInput(lastExercise.exerciseName);
		}
	}, [lastExercise]);

	//function do search for new exercise
	const handelSearchExercise = () => {
		navigate('/atlas');
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
							url: lastExercise.url,
						},
					];
				} else {
					newExercise = [
						{
							name: exerciseNameInput,
							repeat: 1,
							weight: 0,
							url: lastExercise.url,
						},
					];
				}
				//
				setNoExerciseError(false);
				//
				const newTraining = [...trainingToUpdate, newExercise];
				updateTrainingHandler(newTraining);
				dispatch(setlastExercise({}));
				setExerciseNameInput('');
			}
		} else {
			setNoExerciseError(true);
		}
	};
	return (
		<div className='addNewExercise'>
			<div className='addNewExercise__box1'>
				<div className='addNewExercise__box1-inputs'>
					{lastExercise && (
						<input
							placeholder='Wprowadz nazwę ćwiczenia'
							type='text'
							maxLength={50}
							value={exerciseNameInput}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setExerciseNameInput(e.target.value);
							}}
						/>
					)}
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
						<div
							className='addNewExercise__box2-text'
							onClick={handelSearchExercise}
						>
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
			</div>
		</div>
	);
};

export default AddNewExercise;
