import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const TricepsScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Triceps</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Mięsień zajmujący około 2/3 objętości naszego ramienia. Jest
							złożony z 3 głów: bocznej, długiej oraz przyśrodkowej. Głównym
							zadaniem mięśnia jest wyprost w stawie łokciowym, a więc każde
							ćwiczenie, w którym go wykonujemy, będzie angażować nasze
							tricepsy.
						</p>
						<p>
							Do najpopularniejszych ćwiczeń zaliczamy pompki na poręczach,
							czyli ćwiczenie z ciężarem własnego ciała, oraz wyciskanie
							francuskie, które przeważnie wykonujemy przy pomocy sztangi
							łamanej lub hantli.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img
						src='../../img/photo/triceps-1.PNG'
						alt='muscles anatomy model'
					/>
				</div>
			</div>
			<h3>Ćwiczenia na triceps</h3>
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

export default TricepsScreen;
