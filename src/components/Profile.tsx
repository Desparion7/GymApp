import './profile.css';
import { useSendLogoutMutation } from '../app/slices/authApiSlice';
import OptionButton from '../UI/OptionButton';

const Profile = () => {
	const [sendLogout, { isLoading, isSuccess, isError, error }] =
		useSendLogoutMutation();

	return (
		<section className='profile'>
			<div className='profile_optionsBox'>
				<OptionButton img={'../../img/start.PNG'} text={'Rozpocznij trening'} />
				<OptionButton
					img={'../../img/sets.PNG'}
					text={'Moje zestawy ćwiczeń'}
				/>
				<OptionButton
					img={'../../img/history.PNG'}
					text={'Historia treningów'}
				/>
				<OptionButton img={'../../img/diet.PNG'} text={'Moja Dieta'} />
				<OptionButton img={'../../img/records.PNG'} text={'Moje rekordy'} />
				<OptionButton img={'../../img/gears.PNG'} text={'Ustawienia konta'} />
			</div>

			{/* <button className='greenBtn' onClick={sendLogout}>
				Wyloguj się
			</button> */}
		</section>
	);
};

export default Profile;
