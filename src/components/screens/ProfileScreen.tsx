import './profile.css';
import OptionButton from '../../UI/OptionButton';

const Profile = () => {
	return (
		<section className='profile'>
			<div className='profile_optionsBox'>
				<OptionButton
					img={'../../img/start.PNG'}
					text={'Rozpocznij trening'}
					path={'/profile/training'}
				/>
				<OptionButton
					img={'../../img/sets.PNG'}
					text={'Moje zestawy ćwiczeń'}
					path={'/profile/training'}
				/>
				<OptionButton
					img={'../../img/history.PNG'}
					text={'Historia treningów'}
					path={'/profile/training'}
				/>
				<OptionButton
					img={'../../img/diet.PNG'}
					text={'Moja Dieta'}
					path={'/profile/training'}
				/>
				<OptionButton
					img={'../../img/records.PNG'}
					text={'Moje rekordy'}
					path={'/profile/training'}
				/>
				<OptionButton
					img={'../../img/gears.PNG'}
					text={'Ustawienia konta'}
					path={'/profile/training'}
				/>
			</div>
		</section>
	);
};

export default Profile;
