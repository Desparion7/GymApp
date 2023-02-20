import './trainingStoryScreen.css';
import { Link } from 'react-router-dom';
import {
	useGetUserAllTrainingsQuery,
	useRemoveTrainingByIdMutation,
} from '../../app/slices/trainingApiSlice';

const TrainingStoryScreen = () => {
	const { data: trainingsList, isLoading } = useGetUserAllTrainingsQuery();
	const [removeTrainingById] = useRemoveTrainingByIdMutation();

	const handelRemoveTraining = async (id: string) => {
		await removeTrainingById({ id });
	};

	return (
		<section className='trainingStory'>
			<h2>Historia moich treningów</h2>
			<div className='trainingStory__table'>
				<div className='trainingStory__thead'>
					<div>Data treningu</div>
					<div>Nazwa zestawu ćwiczeń</div>
					<div className='trainingStory__thead-time'>Czas treningu</div>
					<div className='trainingStory__thead-options'>Usuń / Edytuj</div>
				</div>
				{trainingsList?.length === 0 && !isLoading && (
					<p className='infoText'>Nie znaleziono żadnych treningów.</p>
				)}
				{trainingsList?.map((training) => (
					<div className='trainingStory__tbody' key={training._id}>
						<div>{training.trainingDate.toString().substring(0, 10)}</div>
						<div>{training.trainingName}</div>
						<div className='trainingStory__tbody-time'>
							{training.traininglength ? `${training.traininglength} min` : ''}
						</div>
						<div className='trainingStory__tbody-options'>
							<img
								src='../../img/trash.PNG'
								onClick={() => {
									if (training?._id) handelRemoveTraining(training._id);
								}}
							/>
							<Link to={`/profile/training/${training._id}`}>
								<img src='../../img/edit.PNG' />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TrainingStoryScreen;
