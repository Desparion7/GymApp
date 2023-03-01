import {
	trainingType,
	trainingSetType,
	TabelElementType,
} from '../models/trainingType';


export const handleDeleteSeries = (
	exerciseIndex: number,
	seriesIndex: number,
	training: trainingType | trainingSetType | undefined,
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>
) => {
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

export const handleAddNewSeries = (
	exerciseIndex: number,
	training: trainingType | trainingSetType | undefined,
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>
) => {
	if (training?.exercise) {
		const newTraining = [...training.exercise];
		const newSeries = newTraining[exerciseIndex].slice(-1)[0];
		const updateNewTraining = [...newTraining[exerciseIndex]];
		updateNewTraining.push(newSeries);
		newTraining[exerciseIndex] = updateNewTraining;
		updateTrainingHandler(newTraining);
	}
};

export const handleChangeWeight = (
	exerciseIndex: number,
	seriesIndex: number,
	weightState: number,
	training: trainingType | trainingSetType | undefined,
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>
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

export const handleChangeRepeat = (
	exerciseIndex: number,
	seriesIndex: number,
	repeatState: number,
	training: trainingType |trainingSetType | undefined,
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>
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
