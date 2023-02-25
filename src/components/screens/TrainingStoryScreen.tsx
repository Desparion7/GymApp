import '../../css/TrainingStoryScreen.css';
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
		<>
			<section className='trainingStory'>
				<h2>Historia moich treningów</h2>
				<div className='trainingStory__table'>
					<div className='trainingStory__tabel-thead'>
						<div>Data treningu</div>
						<div>Nazwa zestawu ćwiczeń</div>
						<div className='trainingStory__tabel-thead-time'>Czas treningu</div>
						<div className='trainingStory__tabel-thead-options'>
							Usuń / Edytuj
						</div>
					</div>
					{trainingsList?.length === 0 && !isLoading && (
						<p className='infoText'>Nie znaleziono żadnych treningów.</p>
					)}
					{trainingsList?.map((training) => (
						<div className='trainingStory__tabel-tbody' key={training._id}>
							<div>{training.trainingDate.toString().substring(0, 10)}</div>
							<div>{training.trainingName}</div>
							<div className='trainingStory__tabel-tbody-time'>
								{training.traininglength
									? `${training.traininglength} min`
									: ''}
							</div>
							<div className='trainingStory__tabel-tbody-options'>
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
				<div className='trainingStory__mobile'>
					{trainingsList?.map((training) => (
						<div key={training._id} className='trainingStory__mobile-box'>
							<div className='trainingStory__mobile-box-time'>
								<div>
									Data:{' '}
									<span>
										{training.trainingDate.toString().substring(0, 10)}
									</span>
								</div>
								<div>
									Czas:{' '}
									<span>
										{training.traininglength
											? `${training.traininglength} min`
											: 'nie podano'}
									</span>
								</div>
							</div>

							<div className='trainingStory__mobile-box-set'>Zestaw:</div>
							<div className='trainingStory__mobile-box-set-name'>
								{training.trainingName}
							</div>
							<div className='trainingStory__mobile-options'>
								<Link to={`/profile/training/${training._id}`}>
									<img src='../../img/edit.PNG' />
								</Link>
								<img
									src='../../img/trash.PNG'
									onClick={() => {
										if (training?._id) handelRemoveTraining(training._id);
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default TrainingStoryScreen;
