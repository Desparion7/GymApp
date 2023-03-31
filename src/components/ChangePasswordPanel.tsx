
import { useState, FormEvent } from 'react';

const passwordRegex =
	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

interface propsType {
	setBackendMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
	updateUser: any;
}

const ChangePasswordPanel = ({ setBackendMessage, updateUser }: propsType) => {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [repeatPassword, setRepeatNewPassword] = useState('');

	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [confirmPasswordError, setConfirmPasswordError] =
		useState<boolean>(false);


	const handlerChangePassword = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newPassword === '' || !passwordRegex.test(newPassword)) {
			setPasswordError(true);
			return;
		}
		if (newPassword !== repeatPassword) {
			setConfirmPasswordError(true);
			return;
		}

		const password = oldPassword;
		try {
			const data = await updateUser({ password, newPassword }).unwrap();
			setBackendMessage(data.message);
		} catch (error: any) {
			if (error) {
				setBackendMessage(error.data.message);
			}
		}

		setPasswordError(false);
		setConfirmPasswordError(false);
		setNewPassword('');
		setRepeatNewPassword('');
		setOldPassword('');
	};

	return (
		<form
			className='accountOptionsScreen-manageBox'
			onSubmit={handlerChangePassword}
		>
			<div className='accountOptionsScreen-manageBox-title'>
				Panel zmiany hasła
			</div>
			<div className='accountOptionsScreen-manageBox-inputs'>
				<label htmlFor='oldpassword'>Stare hasło(jeśli było utworzone):</label>
				<input
					type='password'
					name='oldpassword'
					id='oldpassword'
					value={oldPassword}
					onChange={(e) => {
						setOldPassword(e.target.value);
					}}
					autoComplete='off'
				/>
				<label htmlFor='newpassword'>Nowe hasło:</label>
				<input
					type='password'
					name='newpassword'
					id='newpassword'
					value={newPassword}
					autoComplete='off'
					onChange={(e) => {
						setNewPassword(e.target.value);
					}}
					className={passwordError ? 'inputError' : ''}
				/>
				{passwordError && (
					<p className='errorText'>Hasło nie spełnia wymagań</p>
				)}

				<label htmlFor='repeatpassword'>Powtórz nowe hasło:</label>
				<input
					type='password'
					name='repeatpassword'
					id='repeatpassword'
					value={repeatPassword}
					autoComplete='off'
					onChange={(e) => {
						setRepeatNewPassword(e.target.value);
					}}
					className={confirmPasswordError ? 'inputError' : ''}
				/>
				{confirmPasswordError && (
					<p className='errorText'>Hasła nie są zgodne</p>
				)}
				<p className='accountOptionsScreen-manageBox-info'>
					Hasło wymaga 8 znaków w tym jednej cyfry i znaku specjalnego
				</p>
				<button className='greenBtn' type='submit'>
					Zapisz
				</button>
			</div>
		</form>
	);
};

export default ChangePasswordPanel;
