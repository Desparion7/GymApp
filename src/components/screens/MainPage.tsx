import '../../css/MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
	const navigate = useNavigate();
	return (
		<section className='mainPage'>
			<div className='mainPage__topSection'>
				<div className='mainPage__topSection-textSection'>
					<h3>
						"Nie bądź zwykły, bądź najlepszy - doskonal swoją formę i zdrowie z
						naszą aplikacją."
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
								navigate('/login');
							}}
						>
							Więcej
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainPage;
