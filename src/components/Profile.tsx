import './profile.css';
import { useSendLogoutMutation } from '../app/slices/authApiSlice';

const Profile = () => {
	const [sendLogout, { isLoading, isSuccess, isError, error }] =
		useSendLogoutMutation();

	return (
		<section className='profile'>
			<button className='greenBtn' onClick={sendLogout}>
				Wyloguj się
			</button>
		</section>
	);
};

export default Profile;
