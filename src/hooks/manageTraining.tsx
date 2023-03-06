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
	weightState: number | string,
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
	repeatState: number | string,
	training: trainingType | trainingSetType | undefined,
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
export const handleChangeCheck = (
	exerciseIndex: number,
	seriesIndex: number,
	checkState: boolean,
	training: trainingType | trainingSetType | undefined,
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>
) => {
	if (training?.exercise) {
		const newTraining = [...training.exercise];
		const updateNewTraining = [...newTraining[exerciseIndex]];
		updateNewTraining[seriesIndex] = {
			...updateNewTraining[seriesIndex],
			check: checkState,
		};
		newTraining[exerciseIndex] = updateNewTraining;
		updateTrainingHandler(newTraining);
	}
};
export const handleChangeExercisePosition = (
	exerciseIndex: number,
	training: trainingType | trainingSetType | undefined,
	updateTrainingHandler: (newTraining: TabelElementType[][]) => Promise<void>,
	changeDown: boolean
) => {
	if (training?.exercise) {
		const newTraining = [...training.exercise];
		if (changeDown) {
			const temp = newTraining[exerciseIndex];
			newTraining[exerciseIndex] = newTraining[exerciseIndex + 1];
			newTraining[exerciseIndex + 1] = temp;
		} else {
			const temp = newTraining[exerciseIndex];
			newTraining[exerciseIndex] = newTraining[exerciseIndex - 1];
			newTraining[exerciseIndex - 1] = temp;
		}
		updateTrainingHandler(newTraining);
	}
};
