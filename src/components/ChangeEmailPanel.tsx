
import { useState, FormEvent } from 'react';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface propsType {
	setBackendMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
	updateUser: any;
}

const ChangeEmailPanel = ({ setBackendMessage, updateUser }: propsType) => {
	const [password, setPassword] = useState('');
	const [newEmail, setNewEmail] = useState('');

	const [emailError, setEmailError] = useState<boolean>(false);


	const handlerChangeEmail = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newEmail === '' || !emailRegex.test(newEmail)) {
			setEmailError(true);
			return;
		}

		try {
			const data = await updateUser({ password, newEmail }).unwrap();
			setBackendMessage(data.message);
		} catch (error: any) {
			if (error) {
				setBackendMessage(error.data.message);
			}
		}

		setPassword('');
		setNewEmail('');
		setEmailError(false);
	};

	return (
		<>
			<form
				className='accountOptionsScreen-manageBox2'
				onSubmit={handlerChangeEmail}
			>
				<div className='accountOptionsScreen-manageBox-title'>
					Panel zmiany adresu e-mail
				</div>
				<div className='accountOptionsScreen-manageBox-inputs'>
					<label htmlFor='password'>Podaj hasło:</label>
					<input
						type='password'
						id='password'
						name='password'
						autoComplete='off'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<label htmlFor='email'>Nowe email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={newEmail}
						onChange={(e) => {
							setNewEmail(e.target.value);
						}}
						className={emailError ? 'inputError' : ''}
					/>
					<button className='greenBtn' type='submit'>
						Zapisz
					</button>
				</div>
			</form>
		</>
	);
};

export default ChangeEmailPanel;
