import './public.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../app/slices/authApiSlice';
import { setCredentials } from '../app/api/authSlice';
import { GoogleLogin } from '@react-oauth/google';
import useAuthToken from '../hooks/useAuthToken';
import LoadingSpinner from '../components/loading spinner/LoadingSpinner';

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

	const [login, { isLoading }] = useLoginMutation();

	const { username } = useAuthToken();

	useEffect(() => {
		if (userRef.current) {
			userRef.current.focus();
		}
	}, []);

	useEffect(() => {
		if (username) {
			navigate('/profile');
		}
	}, [username]);

	const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserLogin(e.target.value);
		setUserLoginError(false);
	};
	const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setPasswordError(false);
	};

	const checkInputs = () => {
		setUserLoginError(userLogin === '');
		setPasswordError(password === '');
	};

	const sendRequest = async () => {
		if (userLogin !== '' || password !== '') {
			try {
				if (emailRegex.test(userLogin)) {
					const email = userLogin;
					const { accessToken } = await login({ email, password }).unwrap();
					dispatch(setCredentials({ accessToken }));
				} else {
					const username = userLogin;
					const { accessToken } = await login({ username, password }).unwrap();
					dispatch(setCredentials({ accessToken }));
				}

				setUserLogin('');
				setPassword('');
				navigate('/profile');
			} catch (err: any) {
				if (err.status === 'FETCH_ERROR') {
					setErrMsg('Brak odpowiedzi servera');
				} else if (err.status === 400) {
					setErrMsg('Brak loginu lub hasła');
				} else if (err.status === 401) {
					setErrMsg('Niepoprawny login lub hasło');
				} else {
					setErrMsg(err.data?.message);
				}
			}
		}
	};
	const handleSubmit = () => {
		checkInputs();
		sendRequest();
	};
	const sendDemoRequest = async () => {
		try {
			const { accessToken } = await login({
				username: 'User',
				password: 'user123$',
			}).unwrap();
			dispatch(setCredentials({ accessToken }));

			navigate('/profile');
		} catch (err: any) {
			if (err.status === 'FETCH_ERROR') {
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
	const handleDemo = () => {
		sendDemoRequest();
	};
	const handleloginByGoogle = async (credentialResponse: any) => {
		try {
			const { accessToken } = await login({
				credential: credentialResponse,
			}).unwrap();
			dispatch(setCredentials({ accessToken }));
		} catch (err: any) {
			if (err.status === 'FETCH_ERROR') {
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
				<p>Wszystkie informacje na temat treningu w jednym miejscu.</p>
			</div>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className='public__publicBox'>
					<form>
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
						{}

						<button className='greenBtn' type='button' onClick={handleSubmit}>
							Zaloguj się
						</button>
						<button className='greenBtn' onClick={handleDemo}>
							Demo
						</button>
						<GoogleLogin
							onSuccess={(credentialResponse) => {
								handleloginByGoogle(credentialResponse.credential);
							}}
							onError={() => {
								setErrMsg('Logowanie za pomocą gmail nie powiodło się');
							}}
						/>
					</form>
					<div className='public__publicBox-retrievePassword'>
						<Link to='/reset'>Nie pamiętasz hasła?</Link>
					</div>
					<div className='public__publicBox-line'></div>
					<button
						className='greyBtn'
						onClick={() => {
							navigate('/signup');
						}}
					>
						Utwórz nowe konto
					</button>
				</div>
			)}
		</section>
	);
};

export default Login;
