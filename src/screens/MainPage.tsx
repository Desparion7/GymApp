import '../css/MainPage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
	const navigate = useNavigate();
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = './img/bg.png';
		img.onload = () => {
			setImgLoaded(true);
		};
	});

	return (
		<>
			{imgLoaded && (
				<section className='mainPage'>
					<img src='./img/bg.png' alt='training scene' />
					<div className='mainPage__topSection'>
						<div className='mainPage__topSection-textSection'>
							<h3>
								"Nie bądź zwykły, bądź najlepszy - doskonal
								swoją formę i zdrowie z naszą aplikacją."
							</h3>
							<div className='mainPage__topSection-textSection-btnbox'>
								<button
									className='greenBtn'
									onClick={() => {
										navigate('/login');
									}}
								>
									Zaloguj się
								</button>
								<button
									className='greenBtn'
									onClick={() => {
										navigate('/about');
									}}
								>
									Więcej
								</button>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default MainPage;
