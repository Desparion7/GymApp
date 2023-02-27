import '../../css/MyPlansScreen.css';
import {
	useGetAllSetsQuery,
	useDeleteSetMutation,
} from '../../app/slices/trainingSetApi';
import { trainingSetType } from '../../models/trainingType';
import LoadingSpinner from '../UI/LoadingSpinner';

const MyPlansScreen = () => {
	const { data: trainingsSets, isLoading } = useGetAllSetsQuery();

	const [deleteSet, data] = useDeleteSetMutation();

	const handleDeleteSet = async (id: string) => {
		await deleteSet({ id });
	};

	return (
		<section className='myPlans'>
			{isLoading && <LoadingSpinner />}
			<h2>moje zestawy cwiczeń</h2>
			{trainingsSets?.length === 0 && (
				<h3>Aktualnie nie masz utworzonych zestawów ćwiczeń</h3>
			)}
			<div className='myPlans__box'>
				{trainingsSets?.map((set: trainingSetType) => (
					<div key={set._id} className='myPlans__box-plan'>
						<h4>{set.trainingName}</h4>
						<div>
							<button
								onClick={() => {
									if (set?._id) {
										handleDeleteSet(set._id);
									}
								}}
							>
								<img src='../../img/trash.PNG' />
							</button>
							<button>
								<img src='../../img/edit.PNG' />
							</button>
						</div>
					</div>
				))}

				<div className='myPlans__box-plan'>
					<h4>
						Trening klatki piersiowej i brzucha super extra fajny mega super
					</h4>
					<div>
						<button>
							<img src='../../img/trash.PNG' />
						</button>
						<button>
							<img src='../../img/edit.PNG' />
						</button>
					</div>
				</div>
				<div className='myPlans__box-newplan'>
					<h4>Utwórz nowy zestaw</h4>
					<button>
						<img src='../../img/plus.PNG' />
					</button>
				</div>
			</div>
		</section>
	);
};

export default MyPlansScreen;
