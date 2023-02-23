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
					<h4></h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to=''>
							<img src='../../img/photo/exercise/legsbutt-1.PNG' alt='' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BellyScreen;
