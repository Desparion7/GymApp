import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const BellyScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Brzuch</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Mięśnie brzucha znajdują się w centrum naszego ciała i bez naszej
							świadomości biorą udział w każdej czynności ruchowej związanej z
							lokomocją lub ćwiczeniami z wolnym ciężarem. Łączą górną część
							ciała z dolną. Ich podstawowe zadania to stabilizacja i utrzymanie
							prostej sylwetki
						</p>
						<p>
							Ćwiczenia przedstawione poniżej mają za zadanie wzmocnić nasze
							mięśnie oraz pomóc w dążeniu do ich kształtowania.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img src='../../img/photo/belly-1.PNG' alt='muscles anatomy model' />
				</div>
			</div>
			<h3>Ćwiczenia brzuch</h3>
			<div className='exerciesCategoryScreen__exercises'>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Przyciąganie kolan do klatki w zwisie na drążku</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='przyciąganie-kolan-do-klatki-w-zwisie-na-drążku'>
							<img
								src='../../img/photo/exercise/belly-1.PNG'
								alt='Przyciąganie kolan do klatki w zwisie na drążku'
							/>
						</Link>
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Izometryczny skurcz mięśni brzucha. Deska/ścianka/plank</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='plank'>
							<img
								src='../../img/photo/exercise/belly-2.PNG'
								alt='Izometryczny skurcz mięśni brzucha. Deska/ścianka/plank'
							/>
						</Link>
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Spięcia brzucha z linkami wyciągu górnego</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='spięcia-brzucha-z-linkami-wyciągu-górnego'>
							<img
								src='../../img/photo/exercise/belly-3.PNG'
								alt='Spięcia brzucha z linkami wyciągu górnego'
							/>
						</Link>
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Scyzoryk</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='scyzoryk'>
							<img src='../../img/photo/exercise/belly-4.PNG' alt='Scyzoryk' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BellyScreen;
