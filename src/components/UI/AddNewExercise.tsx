import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lastUsedExercise } from '../../app/api/userInfoSlice';
import { TabelElementType } from '../../models/trainingType';
import { useUpdateTrainingMutation } from '../../app/slices/trainingApiSlice';
import '../../css/AddNewExercise.css';
import { useState } from 'react';

interface AddPropsType {
	trainingToUpdate: TabelElementType[][] | undefined;
	id: string;
}

const AddNewExercise = ({ trainingToUpdate, id }: AddPropsType) => {
	const [noExerciseError, setNoExerciseError] = useState<boolean>(false);
	const [exerciseNameInput, setExerciseNameInput] = useState<string>('');
	const navigate = useNavigate();
	const lastExercise = useSelector(lastUsedExercise);

	const [updateTraining, { isError, error }] = useUpdateTrainingMutation();

	const updateTrainingHandler = async (newTraining: TabelElementType[][]) => {
		await updateTraining({ id, exercise: newTraining });
	};

	//function do search for new exercise
	const handelSearchExercise = () => {
		navigate('/atlas');
	};
	//function do add new exercise from search
	const handelAddExercise = () => {
		if (trainingToUpdate) {
			let newExercise;
			if (lastExercise.exerciseName) {
				newExercise = [
					{
						name: lastExercise.exerciseName,
						repeat: 1,
						weight: 0,
						url: lastExercise.url,
					},
				];
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
		console.log(exerciseNameInput);
		if (exerciseNameInput.trim().length !== 0) {
			if (trainingToUpdate) {
				let newExercise;
				newExercise = [
					{
						name: exerciseNameInput,
						repeat: 1,
						weight: 0,
					},
				];
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
				<div className='addNewExercise__box1-search'>
					{lastExercise.exerciseName ? (
						<div className='addNewExercise__box1-text'>
							{lastExercise.exerciseName}
						</div>
					) : (
						<div className='addNewExercise__box1-text'>
							Wyszukaj ćwiczenie w atlasie
						</div>
					)}{' '}
					<button
						onClick={handelSearchExercise}
						className='addNewExercise__box1-search-btn'
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
			{noExerciseError && (
				<p className='errorText'>Nie wybrano żadnego ćwieczenia</p>
			)}
			<div className='addNewExercise__box2'>
				<input
					placeholder='Utwórz własne ćwiczenie'
					type='text'
					maxLength={50}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setExerciseNameInput(e.target.value);
					}}
				/>
				<button
					className='addNewExercise__btn'
					onClick={handelAddExerciseInput}
				>
					Dodaj Ćwiczenie
				</button>
			</div>
		</div>
	);
};

export default AddNewExercise;
