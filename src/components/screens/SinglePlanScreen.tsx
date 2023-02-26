import '../../css/SinglePlanScreen.css';
import { useGetExampleTrainingQuery } from '../../app/slices/exampleTrainingApi';
import { useParams, Link } from 'react-router-dom';

const SinglePlanScreen = () => {
	const { path } = useParams() as { path: string };

	const { data } = useGetExampleTrainingQuery({ path });


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
									<div className='singlePlanScreen__box-exercise-name'>
										{seria.name} ➡
									</div>
								</Link>
							) : (
								<div className='singlePlanScreen__box-exercise-name'>
									{seria.name}
								</div>
							)}
							<div className='singlePlanScreen__box-exercise-repeat'>{`Powtórzenia: ${seria.repeat}`}</div>
						</div>
					))}
				</div>
			))}
		</section>
	);
};

export default SinglePlanScreen;
