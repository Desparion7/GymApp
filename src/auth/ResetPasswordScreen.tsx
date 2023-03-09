import { useNavigate, Link } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useState } from 'react';
import { useResetPasswordMutation } from '../app/slices/usersApiSlice';

const ResetPasswordScreen = () => {
	const [errMsg, setErrMsg] = useState<string | undefined>('');
	const [msg, setMsg] = useState<string | undefined>('');
	const [email, setEmial] = useState<string | null>(null);
	const navigate = useNavigate();

	const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

	const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email) {
			try {
				const response = await resetPassword({ email }).unwrap();
				setMsg(response?.message);
				setErrMsg('');
			} catch (error: any) {
				if (error) {
					setErrMsg(error.data.message);
					setMsg('');
				}
			}
		} else {
			setErrMsg('Prosimy o podanie poprawnego emaila');
		}
	};

	return (
		<section className='public'>
			<h2>Centrum odzyskiwania hasła</h2>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className='public__publicBox'>
					<form onSubmit={handleResetPassword}>
						<label htmlFor='resetEmail'>
							Prosimy o podanie adresu e-mail powiązanego z kontem :
						</label>
						<input
							type='email'
							id='email'
							name='resetEmail'
							autoComplete='off'
							onChange={(e) => {
								setEmial(e.target.value);
							}}
							className='formInput'
						/>
						{isSuccess && <p className='infoText'>{msg}</p>}
						{errMsg && <p className='errorText'>{errMsg}</p>}
						<button className='greenBtn' type='submit'>
							Resetuj hasło
						</button>
					</form>
					<div className='public__publicBox-retrievePassword'>
						<Link to='/'>Powrót do logowania.</Link>
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

export default ResetPasswordScreen;
