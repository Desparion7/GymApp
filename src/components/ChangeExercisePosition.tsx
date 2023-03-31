import { handleChangeExercisePosition } from '../hooks/manageTraining';
import {
	trainingType,
	TabelElementType,
	trainingSetType,
} from '../models/trainingType';

interface propsType {
	exerciseIndex: number;
	training: trainingType | trainingSetType;
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>;
}

const ChangeExercisePosition = ({
	exerciseIndex,
	training,
	updateTrainingHandler,
}: propsType) => {
	return (
		<div className='trainingScreen__exerciesList-box-title-btn'>
			{exerciseIndex !== 0 && (
				<button
					onClick={() => {
						handleChangeExercisePosition(
							exerciseIndex,
							training,
							updateTrainingHandler,
							false
						);
					}}
				>
					<i className='fa-solid fa-up-long'></i>
				</button>
			)}
			{exerciseIndex + 1 !== training?.exercise.length && (
				<button
					onClick={() => {
						handleChangeExercisePosition(
							exerciseIndex,
							training,
							updateTrainingHandler,
							true
						);
					}}
				>
					<i className='fa-solid fa-down-long'></i>
				</button>
			)}
		</div>
	);
};

export default ChangeExercisePosition;
