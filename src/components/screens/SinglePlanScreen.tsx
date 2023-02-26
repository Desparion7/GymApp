import '../../css/SinglePlanScreen.css';
import { useEffect } from 'react';
import { useGetExampleTrainingQuery } from '../../app/slices/exampleTrainingApi';
import { useCreateNewTrainingMutation } from '../../app/slices/trainingApiSlice';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useAuthToken from '../../hooks/useAuthToken';

const SinglePlanScreen = () => {
	const navigate = useNavigate();
	const { path } = useParams() as { path: string };
	const { username } = useAuthToken();
	const { data } = useGetExampleTrainingQuery({ path });
	const [createNewTraining, { data: CreatedTraining }] =
		useCreateNewTrainingMutation();

	useEffect(() => {
		if (CreatedTraining?._id) {
			navigate(`/profile/training/${CreatedTraining._id}`);
		}
	}, [CreatedTraining]);

	const handelStartNewTraining = async () => {
		if (!username) {
			navigate(`/`);
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
			<h2>{data?.trainingName}</h2>
			{data?.exercise.map((exercise, index) => (
				<div className='singlePlanScreen__box' key={index}>
					<h3>{`Ćwiczenie ${index + 1}`}</h3>
					{exercise.map((seria, seriesIndex) => (
						<div className='singlePlanScreen__box-exercise' key={seriesIndex}>
							{seria.url ? (
								<Link to={`/atlas/${seria.url}`}>
									<div>{seria.name} ➡</div>
								</Link>
							) : (
								<div>{seria.name}</div>
							)}
							<div>{`Powtórzenia: ${seria.repeat}`}</div>
						</div>
					))}
				</div>
			))}
			<button className='greenBtn' onClick={handelStartNewTraining}>
				Rozpocznij trening
			</button>
		</section>
	);
};

export default SinglePlanScreen;
