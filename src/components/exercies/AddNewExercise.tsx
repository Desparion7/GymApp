import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lastUsedExercise } from '../../app/api/userInfoSlice';
import { TabelElementType } from '../../models/trainingType';
import { useUpdateTrainingMutation } from '../../app/slices/trainingApiSlice';

interface AddPropsType {
	trainingToUpdate: TabelElementType[][] | undefined;
	id: string;
}

const AddNewExercise = ({ trainingToUpdate, id }: AddPropsType) => {
	const navigate = useNavigate();
	const lastExercise = useSelector(lastUsedExercise);

	const [updateTraining, { isError }] = useUpdateTrainingMutation();

	const updateTrainingHandler = async (newTraining: TabelElementType[][]) => {
		await updateTraining({ id, exercise: newTraining });
	};

	//function do search for new exercise
	const handelSearchExercise = () => {
		navigate('/atlas');
	};
	//function do add new exercise
	const handelAddExercise = () => {
		if (trainingToUpdate) {
			let newExercise;
			if (lastExercise.exerciseName) {
				newExercise = [
					{
						name: lastExercise.exerciseName,
						repeat: 1,
						weight: 1,
						url: lastExercise.url,
					},
				];
			} else {
				newExercise = [
					{
						name: 'podciąganie',
						repeat: 1,
						weight: 1,
					},
				];
			}
			const newTraining = [...trainingToUpdate, newExercise];
			updateTrainingHandler(newTraining);
		}
	};

	return (
		<div>
			{lastExercise.exerciseName ? (
				<div>{lastExercise.exerciseName}</div>
			) : (
				<div>Brak ćwiczenia do dodania</div>
			)}
			<button
				className='trainingScreen__exerciesList-add-btn'
				onClick={handelAddExercise}
			>
				Dodaj Ćwiczenie
			</button>
			<button
				className='trainingScreen__exerciesList-add-btn'
				onClick={handelSearchExercise}
			>
				Wyszukaj ćwiczenie
			</button>
		</div>
	);
};

export default AddNewExercise;
