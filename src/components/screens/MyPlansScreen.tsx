import '../../css/MyPlansScreen.css';
import { useEffect } from 'react';
import {
	useGetAllSetsQuery,
	useDeleteSetMutation,
	useCreateNewSetMutation,
} from '../../app/slices/trainingSetApi';
import { trainingSetType } from '../../models/trainingType';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const MyPlansScreen = () => {
	const navigate = useNavigate();

	const { data: trainingsSets, isLoading } = useGetAllSetsQuery();
	const [deleteSet, { isSuccess, isError }] = useDeleteSetMutation();
	const [createNewSet, { data }] = useCreateNewSetMutation();

	useEffect(() => {
		if (data?._id) {
			navigate(`${data?._id}-edit`);
		}
	}, [data]);

	const handleDeleteSet = async (id: string) => {
		await deleteSet({ id });
	};
	const handleCreateNewSet = async () => {
		const trainingName = 'Nowy zestaw';
		const exercise = [] as any[];
		await createNewSet({ trainingName, exercise });
	};

	return (
		<section className='myPlans'>
			{isLoading && <LoadingSpinner />}
			<h2>moje zestawy cwiczeń</h2>
			{trainingsSets?.length === 0 && (
				<h3 className='myPlans-info'>
					Aktualnie nie masz utworzonych zestawów ćwiczeń.
				</h3>
			)}
			{isSuccess && (
				<h3 className='myPlans-info'>Zestaw został pomyślnie usunięty.</h3>
			)}
			{isError && (
				<h3 className='myPlans-error'>Nie udało się usunąć zestawu.</h3>
			)}
			<div className='myPlans__box'>
				{trainingsSets?.map((set: trainingSetType) => (
					<div key={set._id} className='myPlans__box-plan'>
						<h4>{set.trainingName}</h4>
						<div className='myPlans__box-plan-btn'>
							<button
								onClick={() => {
									if (set?._id) {
										handleDeleteSet(set._id);
									}
								}}
								title='usuń'
							>
								<img src='../../img/trash.PNG' />
							</button>
							<button
								onClick={() => {
									navigate(`${set?._id}`);
								}}
								title='rozpocznij'
							>
								<img src='../../img/plus.png' />
							</button>
							<button
								onClick={() => {
									navigate(`${set?._id}-edit`);
								}}
								title='edytuj'
							>
								<img src='../../img/edit.PNG' />
							</button>
						</div>
					</div>
				))}

				<div className='myPlans__box-newplan'>
					<h4>Utwórz nowy zestaw</h4>
					<button onClick={handleCreateNewSet}>
						<img src='../../img/plus.png' />
					</button>
				</div>
			</div>
		</section>
	);
};

export default MyPlansScreen;
