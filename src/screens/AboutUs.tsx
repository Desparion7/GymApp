import '../css/AboutUs.css';
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {
	const navigate = useNavigate();
	return (
		<section className='aboutUs'>
			<div className='aboutUs__section'>
				<div className='aboutUs__section-text'>
					<h3>Czy jest Menadżer treningu?</h3>
					<p>
						Menadżer treningu to aplikacja stworzona specjalnie dla osób, które
						dbają o swoją formę i zdrowie. Dzięki niej można z łatwością
						zapisywać historię swoich treningów, zarządzać planami treningowymi
						oraz korzystać z opisów ćwiczeń.
					</p>
				</div>
				<div className='aboutUs-img'>
					<img src='../../img/weights.PNG' alt='Ciężarki' />
				</div>
			</div>

			<div className='aboutUs__section'>
				<div className='aboutUs-img middle'>
					<img src='../../img/notes.PNG' alt='Ciężarki' />
				</div>
				<div className='aboutUs__section-text '>
					<h3>Najwazniejsza Funkcja?</h3>
					<p>
						Ważnym elementem menadżera treningu jest możliwość zapisywania
						historii treningów. Dzięki temu możesz śledzić swoje postępy,
						monitorować swoje osiągnięcia oraz dostosowywać swoje plany
						treningowe do swoich aktualnych możliwości. Dzięki temu będziesz
						mógł zachować motywację do dalszej pracy nad swoim ciałem i
						zdrowiem.
					</p>
				</div>
			</div>
			<div className='aboutUs__section'>
				<div className='aboutUs__section-text'>
					<h3>Plany indywidualne</h3>
					<p>
						Nasza aplikacja daje dostęp do przykładowych treningów. Jeśli jednak
						potrzebujesz indywidualnego podejścia do treningu i diety, to z
						pomocą przychodzą nasi specjaliści. Nasza aplikacja umożliwia
						zakupienie spersonalizowanego planu treningowego i diety, które
						zostaną przygotowane przez naszych doświadczonych trenerów oraz
						dietetyków. Dzięki temu masz pewność, że Twoje plany są dopasowane
						do Twoich indywidualnych potrzeb i celów.
					</p>
				</div>
				<div className='aboutUs-img'>
					<button
						className='greenBtn'
						onClick={() => {
							navigate('/planytreningowe');
						}}
					>
						Sprawdź naszą ofertę
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
