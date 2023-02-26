import '../../css/StartTrainingScreen.css';
import OptionButton from '../UI/OptionButton';
import { useCreateNewTrainingMutation } from '../../app/slices/trainingApiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StartTrainingScreen = () => {
	const [createNewTraining, { data: CreatedTraining }] =
		useCreateNewTrainingMutation();

	const navigate = useNavigate();

	useEffect(() => {
		if (CreatedTraining?._id) {
			navigate(`/profile/training/${CreatedTraining._id}`);
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
			<div className='starttrainingScreen__options'>
				<OptionButton
					img={'../../img/adduser.PNG'}
					text={'Dodaj mój zestaw ćwiczeń'}
					path={'/profile/training'}
				/>
				<OptionButton
					img={'../../img/addapp.PNG'}
					text={'Dodaj zestaw ze strony'}
					path={'/planytreningowe'}
				/>
				<OptionButton
					img={'../../img/addnew.PNG'}
					text={'Trening z dobieranymi ćwiczeniami'}
					handelOnClick={handelStartNewTraining}
				/>
			</div>
		</div>
	);
};

export default StartTrainingScreen;
