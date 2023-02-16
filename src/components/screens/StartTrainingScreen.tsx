import './starttrainingscreen.css';
import OptionButton from '../../UI/OptionButton';
import { useCreateNewTrainingMutation } from '../../app/slices/trainingApiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StartTrainingScreen = () => {
	const [createNewTraining, { data }] =
		useCreateNewTrainingMutation();

	const navigate = useNavigate();

	useEffect(() => {
		if (data?._id) {
			
			navigate(`/profile/training/${data._id}`);
		}
	}, [data]);

	const tabel = [[{}]];

	const handelStartNewTraining = async () => {
		await createNewTraining({ newTraining: tabel });
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
					path={'/profile/training/examples'}
				/>
				<OptionButton
					img={'../../img/addnew.PNG'}
					text={'Utwórz nowy zestaw ćwiczeń'}
					handelOnClick={handelStartNewTraining}
				/>
			</div>
		</div>
	);
};

export default StartTrainingScreen;
