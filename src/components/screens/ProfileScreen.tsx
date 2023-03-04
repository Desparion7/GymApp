import '../../css/Profile.css';
import OptionButton from '../UI/OptionButton';
import useAuthToken from '../../hooks/useAuthToken';

const Profile = () => {
	const { username } = useAuthToken() as {
		username: string;
		isAdmin: boolean;
	};
	return (
		<section className='profile'>
			<h2>Witaj {username} !</h2>
			<div className='profile_optionsBox'>
				<OptionButton
					img={'../../img/start.PNG'}
					text={'Rozpocznij trening'}
					path={'/profile/trening'}
				/>
				<OptionButton
					img={'../../img/history.PNG'}
					text={'Historia treningów'}
					path={'/profile/history'}
				/>
				<OptionButton
					img={'../../img/sets.PNG'}
					text={'Moje zestawy ćwiczeń'}
					path={'/profile/moje-plany-treningowe'}
				/>
				{/* <OptionButton
					img={'../../img/diet.PNG'}
					text={'Moja Dieta'}
					path={'/profile/'}
				/> */}
				<OptionButton
					img={'../../img/records.PNG'}
					text={'Moje rekordy'}
					path={'/profile/moje-rekordy'}
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
