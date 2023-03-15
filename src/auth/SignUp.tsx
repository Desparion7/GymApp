import './public.css';
import { useState, useEffect, MouseEvent } from 'react';
import { useAddNewUserMutation } from '../app/slices/usersApiSlice';
import { Response } from '../models/respondType';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useAuthToken from '../hooks/useAuthToken';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SignIn = () => {
	const [addNewUser, { isLoading }] = useAddNewUserMutation();

	const { username: activeUserName } = useAuthToken();

	const [username, setUsername] = useState('');
	const [userNameError, setUserNameError] = useState(false);

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [emailInvalid, setEmailInvalid] = useState(false);

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [passwordInvalid, setPasswordInvalid] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);

	const [serverErrorMessage, setServerErrorMessage] = useState<
		boolean | string
	>(false);
	const [positiveServerMessage, setPositiveServerMessage] = useState<
		boolean | string
	>(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (activeUserName) {
			navigate('/profile');
		}
	}, [activeUserName]);

	useEffect(() => {}, [serverErrorMessage]);

	const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
		setUserNameError(false);
	};
	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setEmailError(false);
		setEmailInvalid(false);
	};
	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setPasswordError(false);
		setPasswordInvalid(false);
	};
	const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
		setConfirmPasswordError(false);
	};

	const checkInputs = () => {
		setUserNameError(username === '');
		setEmailError(email === '' || !emailRegex.test(email));
		setEmailInvalid(!emailRegex.test(email));
		setPasswordError(password === '' || !passwordRegex.test(password));
		setPasswordInvalid(!passwordRegex.test(password));
		setConfirmPasswordError(password !== confirmPassword);
		return (
			username !== '' &&
			email !== '' &&
			password !== '' &&
			password === confirmPassword
		);
	};

	const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setServerErrorMessage(false);
		if (checkInputs()) {
			const data = (await addNewUser({
				username,
				password,
				email,
			})) as Response;

			if (data.error?.status) {
				setServerErrorMessage('Server nie odpowiada prosimy spróbować później');
			}

			if (data.error?.data?.error) {
				setServerErrorMessage(data.error.data.error);
			}
			if (data.data?.message) {
				setPositiveServerMessage(data.data.message);
			}
			setUsername('');
			setEmail('');
			setPassword('');
			setPasswordError(false);
			setEmailInvalid(false);
		}
	};

	return (
		<>
			<section className='public'>
				{!positiveServerMessage ? (
					<>
						<div className='public__welcomeText'>
							<h2>
								Zarejestuj się w <span>Menadżerze treningu.</span>{' '}
							</h2>
							<p>Każda przygoda ma swój początek.</p>
						</div>
						{isLoading ? (
							<LoadingSpinner />
						) : (
							<div className='public__publicBox'>
								<form>
									<label htmlFor='username'>Nazwa użytkownika:</label>
									<input
										type='text'
										id='username'
										name='username'
										value={username}
										autoComplete='on'
										onChange={handleUserName}
										className={
											userNameError ? 'formInput errorInput' : 'formInput'
										}
									/>
									<label htmlFor='email'>Email:</label>
									<input
										type='email'
										id='email'
										name='email'
										autoComplete='on'
										onChange={handleEmail}
										className={
											emailError ? 'formInput errorInput' : 'formInput'
										}
									/>
									{emailInvalid && (
										<p className='errorText'>
											Format adresu jest nieprawidłowy
										</p>
									)}
									<label htmlFor='password'>Hasło:</label>

									<input
										type='password'
										id='password'
										name='password'
										autoComplete='off'
										onChange={handlePassword}
										className={
											passwordError ? 'formInput errorInput' : 'formInput'
										}
									/>
									{passwordInvalid && password !== '' && (
										<p className='errorText'>Hasło nie spełnia wymagań</p>
									)}
									<label htmlFor='confirmPassword'>Potwierdź hasło:</label>
									<input
										type='password'
										id='confirmPassword'
										name='confirmPassword'
										autoComplete='off'
										onChange={handleConfirmPassword}
										className={
											confirmPasswordError
												? 'formInput errorInput'
												: 'formInput'
										}
									/>
									{confirmPasswordError && (
										<p className='errorText'>
											Wprowadzone hasła nie zgadzają się
										</p>
									)}
									{serverErrorMessage && (
										<p className='errorText'>{serverErrorMessage}</p>
									)}
									<p>
										Hasło wymaga 8 znaków w tym jednej cyfry i znaku specjalnego
									</p>
									<button className='greenBtn' onClick={handleSubmit}>
										Zarejestruj się
									</button>
									<div className='public__publicBox-retrievePassword'>
										<Link to='/login'>Powrót do logowania.</Link>
									</div>
								</form>
							</div>
						)}
					</>
				) : (
					<>
						<div className='public__welcomeText'>
							<h2>
								Posiadasz dostęp do wszystkich funkcji
								<span>Menadżera treningu.</span>
							</h2>
						</div>
						<p className='public_text'>{positiveServerMessage}</p>
						<p className='public_text'>
							<Link to='/login'>Zaloguj się</Link>
						</p>
					</>
				)}
			</section>
		</>
	);
};

export default SignIn;
