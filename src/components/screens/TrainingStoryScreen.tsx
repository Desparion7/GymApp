import '../../css/TrainingStoryScreen.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
	useGetUserAllTrainingsQuery,
	useRemoveTrainingByIdMutation,
} from '../../app/slices/trainingApiSlice';
import LoadingSpinner from '../UI/LoadingSpinner';
import { Paginate } from '../UI/Paginate';
import { useEffect } from 'react';

const TrainingStoryScreen = () => {
	const params = useParams();
	const navigate = useNavigate();
	const pageNumber = params.pageNumber;

	const { data, isLoading } = useGetUserAllTrainingsQuery(pageNumber);

	const trainingsList = data?.trainings;
	const page = data?.page;
	const pages = data?.pages;

	const [removeTrainingById] = useRemoveTrainingByIdMutation();

	const handelRemoveTraining = async (id: string) => {
		await removeTrainingById({ id });
	};

	// naviagation to before page after removed all trainigs on page
	useEffect(() => {
		if (pageNumber && Number(pageNumber) > 1) {
			if (trainingsList?.length === 0) {
				console.log('ok');
				navigate(`/profile/history/${Number(pageNumber) - 1}`);
			}
		}
	}, [trainingsList]);

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
					{isLoading && <LoadingSpinner />}
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
									: 'nie podano'}
							</div>
							<div className='trainingStory__tabel-tbody-options'>
								<img
									src='../../img/trash.PNG'
									onClick={() => {
										if (training?._id) handelRemoveTraining(training._id);
									}}
								/>
								<Link to={`/profile/trening/${training._id}`}>
									<img src='../../img/edit.PNG' />
								</Link>
							</div>
						</div>
					))}
					{pages && page ? <Paginate pages={pages} page={page} /> : <></>}
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
											: 'brak'}
									</span>
								</div>
							</div>

							{/* <div className='trainingStory__mobile-box-set'>Zestaw:</div> */}
							<div className='trainingStory__mobile-box-set-name'>
								{training.trainingName}
							</div>
							<div className='trainingStory__mobile-options'>
								<Link to={`/profile/trening/${training._id}`}>
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
					{pages && page ? <Paginate pages={pages} page={page} /> : <></>}
				</div>
			</section>
		</>
	);
};

export default TrainingStoryScreen;
