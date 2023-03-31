import { useState } from 'react';
import '../css/AccountOptionsScreen.css';
import useAuthToken from '../hooks/useAuthToken';
import ModalSpinner from '../components/modal spinner/ModalSpinner';
import ChangeEmailPanel from '../components/ChangeEmailPanel';
import ChangePasswordPanel from '../components/ChangePasswordPanel';
import { useUpdateUserMutation } from '../app/slices/usersApiSlice';

const AccountOptionsScreen = () => {
	const { username, email } = useAuthToken();
	const [toggleManageBox, setToggleManageBox] = useState<string>('password');

	const [backendmessage, setBackendMessage] = useState<string | undefined>('');

	const [updateUser, { isLoading, isSuccess, isError }] =
		useUpdateUserMutation();

	const handlerPasswordBox = () => {
		setToggleManageBox('password');
	};
	const handlerEmailBox = () => {
		setToggleManageBox('email');
	};

	return (
		<section className='accountOptionsScreen'>
			<h2>Panel Użytkownika</h2>
			{isLoading && <ModalSpinner />}
			<div>
				<h3>
					Witaj {username}, {email}
				</h3>
				<button className='greenBtn' onClick={handlerPasswordBox}>
					Zmień hasło
				</button>
				<button className='greenBtn' onClick={handlerEmailBox}>
					Zmień adres email
				</button>
				{isSuccess && (
					<p className='accountOptionsScreen-infoText'>{backendmessage}</p>
				)}
				{isError && (
					<p className='accountOptionsScreen-errorText'>{backendmessage}</p>
				)}
			</div>
			{toggleManageBox === 'password' && (
				<ChangePasswordPanel
					setBackendMessage={setBackendMessage}
					updateUser={updateUser}
				/>
			)}
			{toggleManageBox === 'email' && (
				<ChangeEmailPanel
					setBackendMessage={setBackendMessage}
					updateUser={updateUser}
				/>
			)}
		</section>
	);
};

export default AccountOptionsScreen;
