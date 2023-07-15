import '../css/StartTrainingScreen.css';
import OptionButton from '../components/UI/OptionButton';
import { useCreateNewTrainingMutation } from '../app/slices/trainingApiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StartTrainingScreen = () => {
	const [createNewTraining, { data: CreatedTraining }] =
		useCreateNewTrainingMutation();

	const navigate = useNavigate();

	useEffect(() => {
		if (CreatedTraining?._id) {
			navigate(`/profile/trening/${CreatedTraining._id}`);
		}
	}, [CreatedTraining]);

	const exercise = [] as any[];
	const trainingDate = new Date();
	const trainingName = 'Nowy zestaw';

	const handelStartNewTraining = async () => {
		await createNewTraining({ exercise, trainingDate, trainingName });
	};

	return (
		<div className='starttrainingScreen'>
			<h2>Wybierz zestaw ćwiczeń</h2>
			<div className='starttrainingScreen__options'>
				<OptionButton
					img={'../../img/adduser.PNG'}
					text={'Dodaj mój zestaw ćwiczeń'}
					text2={
						'Rozpocznij trening z własno utworznonym treningiem na naszej stronie.'
					}
					path={'/profile/moje-plany-treningowe'}
				/>
				<OptionButton
					img={'../../img/addnew.PNG'}
					text={'Dodaj zestaw ze strony'}
					text2={'Wykorzystaj jeden z dostępnych treningów na naszej stronie. '}
					path={'/planytreningowe'}
				/>
				<OptionButton
					img={'../../img/addapp.PNG'}
					text={'Trening z dobieranymi ćwiczeniam'}
					text2={'Rozpocznij trening i dobierz ćwiczenie samodzielnie.'}
					handelOnClick={handelStartNewTraining}
				/>
			</div>
		</div>
	);
};

export default StartTrainingScreen;
