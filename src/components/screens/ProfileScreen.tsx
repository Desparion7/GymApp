import '../../css/Profile.css';
import OptionButton from '../UI/OptionButton';

const Profile = () => {
	return (
		<section className='profile'>
			<div className='profile_optionsBox'>
				<OptionButton
					img={'../../img/history.PNG'}
					text={'Moje treningi'}
					path={'/profile/history'}
				/>
				<OptionButton
					img={'../../img/start.PNG'}
					text={'Rozpocznij trening'}
					path={'/profile/trening'}
				/>
				<OptionButton
					img={'../../img/sets.PNG'}
					text={'Moje zestawy ćwiczeń'}
					path={'/profile/moje-plany-treningowe'}
				/>
				<OptionButton
					img={'../../img/diet.PNG'}
					text={'Moja Dieta'}
					path={'/profile/'}
				/>
				<OptionButton
					img={'../../img/records.PNG'}
					text={'Moje rekordy'}
					path={'/profile/'}
				/>
				<OptionButton
					img={'../../img/gears.PNG'}
					text={'Ustawienia konta'}
					path={'/profile/'}
				/>
			</div>
		</section>
	);
};

export default Profile;
