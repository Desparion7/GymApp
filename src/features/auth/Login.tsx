import './login.css';
import { MouseEvent } from 'react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../app/slices/authApiSlice';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
	const userRef = useRef<HTMLInputElement>(null);

	const [userLogin, setUserLogin] = useState('');
	const [userLoginError, setUserLoginError] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [errMsg, setErrMsg] = useState<string | null>(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, {}] = useLoginMutation();

	useEffect(() => {
		if (userRef.current) {
			userRef.current.focus();
		}
	}, []);

	const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserLogin(e.target.value);
		setUserLoginError(false);
	};
	const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setPasswordError(false);
	};

	const checkInputs = () => {
		if (userLogin === '') {
			setUserLoginError(true);
		}
		if (password === '') {
			setPasswordError(true);
		}
	};

	const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		checkInputs();

		try {
			if (emailRegex.test(userLogin)) {
				const email = userLogin;
				const { accessToken } = await login({ email, password }).unwrap();
				console.log(accessToken);
			} else {
				const username = userLogin;
				const { accessToken } = await login({ username, password }).unwrap();
				console.log(accessToken);
			}

			setUserLogin('');
			setPassword('');
			// navigate('/home');
		} catch (err: any) {
			if (!err.status) {
				setErrMsg('Brak odpowiedzi servera');
			} else if (err.status === 400) {
				setErrMsg('Brak loginu lub hasła');
			} else if (err.status === 401) {
				setErrMsg('Niepoprawny login lub hasło');
			} else {
				setErrMsg(err.data?.message);
			}
		}
	};

	return (
		<section className='public'>
			<div className='public__welcomeText'>
				<h2>
					Witaj w <span>menadżerze treningu.</span>{' '}
				</h2>
				<p>Wszystkie informacje na temt treningu w jednym miejscu.</p>
			</div>
			<div className='public__loginBox'>
				<form action=''>
					<label htmlFor='login'>Login lub email:</label>
					<input
						type='text'
						id='login'
						name='login'
						autoComplete='on'
						onChange={handleUserInput}
						className={userLoginError ? 'formInput errorInput' : 'formInput'}
					/>

					<label htmlFor='password'>Hasło:</label>
					<input
						type='password'
						id='password'
						name='password'
						autoComplete='current-password'
						onChange={handlePwdInput}
						className={passwordError ? 'formInput errorInput' : 'formInput'}
					/>

					{errMsg && <p className='errorText'>{errMsg}</p>}

					<button className='public__loginBox-loginBtn' onClick={handleSubmit}>
						Zaloguj się
					</button>
				</form>
				<div className='public__loginBox-retrievePassword'>
					Nie pamiętasz hasła?
				</div>
				<div className='public__loginBox-line'></div>
				<button
					className='public__loginBox-signinBtn'
					onClick={() => {
						navigate('/signin');
					}}
				>
					Utwórz nowe konto
				</button>
			</div>
		</section>
	);
};

export default Login;
