import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const CalvesScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Łydki</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							W skład mięśnia trójgłowego łydki wchodzą mięsień brzuchaty łydki
							oraz płaszczkowaty. Ten pierwszy jest bardziej widoczny i nadaje
							łydce charakterystyczny kształt. Obydwa mięśnie łączą się ze sobą,
							tworząc ścięgno Achillesa.
						</p>
						<p>
							Ich głównym zadaniem jest zgięcie podeszwowe stopy (wspięcie na
							palce). Gdy nasze kolana są ugięte, większą pracę wykonuje mięsień
							płaszczkowaty, gdy kolana są wyprostowane – mięsień brzuchaty
							łydki.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img
						src='../../img/photo/calves-1.PNG'
						alt='muscles anatomy model'
					/>
				</div>
			</div>
			<h3>Ćwiczenia na łydki</h3>
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

export default CalvesScreen;
