import '../css/SinglePlanScreen.css';
import { useEffect } from 'react';
import { useGetExampleTrainingQuery } from '../app/slices/exampleTrainingApi';
import { useCreateNewTrainingMutation } from '../app/slices/trainingApiSlice';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';
import LoadingSpinner from '../components/loading spinner/LoadingSpinner';

const SinglePlanScreen = () => {
	const navigate = useNavigate();
	const { path } = useParams() as { path: string };
	const { username } = useAuthToken();
	const { data, isLoading } = useGetExampleTrainingQuery({ path });
	const [createNewTraining, { data: CreatedTraining }] =
		useCreateNewTrainingMutation();

	useEffect(() => {
		if (CreatedTraining?._id) {
			navigate(`/profile/trening/${CreatedTraining._id}`);
		}
	}, [CreatedTraining]);

	const handelStartNewTraining = async () => {
		if (!username) {
			navigate(`/login`);
			return;
		} else {
			if (data) {
				const exercise = data.exercise;
				const trainingDate = new Date();
				const trainingName = data?.trainingName;
				await createNewTraining({ exercise, trainingDate, trainingName });
			}
		}
	};

	return (
		<section className='singlePlanScreen'>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<h2>{data?.trainingName}</h2>
					<button className='greenBtn' onClick={handelStartNewTraining}>
						Rozpocznij trening
					</button>
					{data?.exercise.map((exercise, index) => (
						<div className='singlePlanScreen__box' key={index}>
							<h3>{`Ćwiczenie ${index + 1}`}</h3>
							{exercise.map((seria, seriesIndex) => (
								<div
									className='singlePlanScreen__box-exercise'
									key={seriesIndex}
								>
									{seria.url ? (
										<Link to={`/atlas/${seria.url}`}>
											<div>{seria.name} ➡</div>
										</Link>
									) : (
										<div>{seria.name}</div>
									)}
									{!seria.time && <div>{`Powtórzenia: ${seria.repeat}`}</div>}
									{seria.time && <div>{`Czas w min: ${seria.repeat}`}</div>}
								</div>
							))}
						</div>
					))}
				</>
			)}
		</section>
	);
};

export default SinglePlanScreen;
