import {  useLocation, Link } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useState } from 'react';
import { useCreateNewPasswordMutation } from '../app/slices/usersApiSlice';
const passwordRegex =
	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const CreateNewPassword = () => {

	const location = useLocation();
	const token = location.hash.split('=')[1];

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [passwordInvalid, setPasswordInvalid] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);

	const [errMsg, setErrMsg] = useState<string | undefined>('');

	const [createNewPassword, { isLoading, isSuccess }] =
		useCreateNewPasswordMutation();


	const handlePassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === '') {
			setPasswordError(true);
			return;
		}
		if (confirmPassword === '') {
			setConfirmPasswordError(true);
			return;
		}
		if (!passwordRegex.test(password)) {
			setPasswordInvalid(true);
			return;
		}
		if (password !== confirmPassword) {
			setConfirmPasswordError(true);
			return;
		}
		if (token) {
			try {
				await createNewPassword({ password, token }).unwrap();
				setErrMsg('');
			} catch (error: any) {
				if (error) {
					setErrMsg(error.data.message);
				}
			}
		} else {
			setErrMsg('Prosimy o podanie poprawnego emaila');
		}
	};

	return (
		<section className='public'>
			{isSuccess ? (
				<>
					<h3>Hasło zostało zmienione </h3>
					<p className='public_text'>
						<Link to='/'>Powrót do logowania</Link>
					</p>
				</>
			) : (
				<>
					<h2>Utwórz nowe hasło</h2>
					{isLoading ? (
						<LoadingSpinner />
					) : (
						<div className='public__publicBox'>
							<p>
								Hasło wymaga 8 znaków w tym jednej cyfry i znaku specjalnego
							</p>
							<form onSubmit={handlePassword}>
								<label htmlFor='newPassword'>Nowe hasło :</label>
								<input
									type='password'
									id='newPassword'
									name='newPassword'
									autoComplete='off'
									onChange={(e) => {
										setPassword(e.target.value);
										setPasswordError(false);
									}}
									className={
										passwordError ? 'formInput errorInput' : 'formInput'
									}
								/>
								<label htmlFor='repeatNewPassword'>Potwierdź hasło :</label>
								<input
									type='password'
									id='repeatNewPassword'
									name='repeatNewPassword'
									autoComplete='off'
									onChange={(e) => {
										setConfirmPassword(e.target.value);
										setConfirmPasswordError(false);
									}}
									className={
										confirmPasswordError ? 'formInput errorInput' : 'formInput'
									}
								/>
								{confirmPasswordError && (
									<p className='errorText'>Wprowadzone hasła nie są zgodne</p>
								)}
								{passwordInvalid && (
									<p className='errorText'>Hasło nie spełnia wymagań</p>
								)}
								{errMsg && <p className='errorText'>{errMsg}</p>}
								<button className='greenBtn' type='submit'>
									Zatwierdz nowe hasło
								</button>
							</form>
						</div>
					)}
				</>
			)}
		</section>
	);
};

export default CreateNewPassword;
