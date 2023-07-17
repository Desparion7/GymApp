import '../css/Profile.css';
import OptionButton from '../components/UI/OptionButton';
import useAuthToken from '../hooks/useAuthToken';

const Profile = () => {
	const { username } = useAuthToken() as {
		username: string;
		isAdmin: boolean;
	};
	return (
		<section className='profile'>
			<h2>Witaj {username} !</h2>
			<div className='profile_img1'>
				<img src='../../img/g1.PNG' alt='fit couple' />
			</div>
			<div className='profile_img2'>
				<img src='../../img/g2.PNG' alt='fit couple' />
			</div>
			<div className='profile_img3'>
				<img src='../../img/g3.PNG' alt='fit couple' />
			</div>
			<div className='profile_img4'>
				<img src='../../img/g4.PNG' alt='fit couple' />
			</div>
			<div className='profile_optionsBox'>
				<OptionButton
					img={'../../img/start.PNG'}
					text={'Rozpocznij trening'}
					text2={
						'Rozpocznij i zapisz swój trening korzystając z własnych lub dostępnych planów trenigowych '
					}
					path={'/profile/trening'}
				/>
				<OptionButton
					img={'../../img/history.PNG'}
					text={'Historia treningów'}
					text2={
						'Kontroluj swoje postępy w historii treningów gdzie masz pełen dostęp do treningów kóre zostały wykonane'
					}
					path={'/profile/history'}
				/>
				<OptionButton
					img={'../../img/sets.PNG'}
					text={'Moje zestawy ćwiczeń'}
					text2={
						'Utwórz swoje zestawy ćwiczeń, aby szybko rozpocząć trening z własnymi ćwiczeniami '
					}
					path={'/profile/moje-plany-treningowe'}
				/>
				<OptionButton
					img={'../../img/records.PNG'}
					text={'Moje rekordy'}
					text2={
						'Dla ludzi lubiących notować swoje osiągnięcia. Zapisz najlepsze wyniki w wybranych ćwiczeniach.'
					}
					path={'/profile/moje-rekordy'}
				/>
				<OptionButton
					img={'../../img/gears.PNG'}
					text={'Ustawienia konta'}
					text2={
						'Zmień ustawienia swojego konta. Wprowadz zmiany w dostępie przez zmiane hasła lub emaila'
					}
					path={'/profile/options'}
				/>
			</div>
		</section>
	);
};

export default Profile;
