import './public.css';

const Public = () => {
	return (
		<section className='public'>
			<div className='public__welcomeText'>
				<h2>
					Witaj w <span>menadżerze treningu.</span>{' '}
				</h2>
				<p>Wszystkie informacje na temt treningu w jednym miejscu.</p>
			</div>
			<div className='public__loginBox'>
				<label htmlFor='login'>Login lub email:</label>
				<input type='text' id='login' name='login' />
				<label htmlFor='password'>Hasło:</label>
				<input type='password' id='password' name='password' />
				<button className='public__loginBox-loginBtn'>Zaloguj się</button>
				<div className='public__loginBox-retrievePassword'>
					Nie pamiętasz hasła?
				</div>
				<div className='public__loginBox-line'></div>
				<button className='public__loginBox-signinBtn'>
					Utwórz nowe konto
				</button>
			</div>
		</section>
	);
};

export default Public;
