import '../css/TrainingScreen.css';
import { useState, useEffect } from 'react';
import { useGetTrainingSetByIdQuery } from '../app/slices/trainingSetApi';
import { useCreateNewTrainingMutation } from '../app/slices/trainingApiSlice';

import { setlastUsedSetId } from '../app/api/userInfoSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TabelElementType } from '../models/trainingType';

import ExerciseStatic from '../components/exercise/ExerciseStatic';

const MyPlanScreen = () => {
	const [setName, setSetName] = useState<string>('');
	const { id } = useParams() as { id: string };
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//trainingSetAPI slice hooks
	const { data: trainingSet } = useGetTrainingSetByIdQuery({ id });
	const [createNewTraining, { data: CreatedTraining }] =
		useCreateNewTrainingMutation();

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

	return (
		<section className='trainingScreen'>
			<h2>mój zestaw</h2>
			<div>
				<div className='trainingScreen__info-name'>
					<div className='trainingScreen__info-name-box'>
						<p>{setName}</p>
					</div>

					<button className='greenBtn' onClick={handelStartNewTraining}>
						Rozpocznij trening z danym zestawem
					</button>
					<button
						className='greenBtn'
						onClick={() => {
							navigate(`/profile/moje-plany-treningowe/${id}-edit`);
						}}
					>
						Edytuj zestaw
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
								</div>
								{exercise &&
									exercise.length > 0 &&
									exercise.map(
										(series: TabelElementType, seriesIndex: number) => (
											<ExerciseStatic
												key={seriesIndex}
												name={series.name}
												repeat={series.repeat}
												weight={series.weight}
												time={series.time}
												url={series.url}
											/>
										)
									)}
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default MyPlanScreen;
