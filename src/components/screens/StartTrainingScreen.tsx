import OptionButton from '../../UI/OptionButton';
import './starttrainingscreen.css';

const StartTrainingScreen = () => {
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
					path={'/profile/training/new'}
				/>
			</div>
		</div>
	);
};

export default StartTrainingScreen;
