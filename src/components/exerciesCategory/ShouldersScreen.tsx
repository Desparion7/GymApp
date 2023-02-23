import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const ShouldersScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Barki</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Mięśnie naramienne, potocznie nazywane barkami, to zespół mięśni,
							których zadaniem jest sterowanie naszymi ramionami. Wyróżniamy w
							nich 3 aktony: przedni, boczny oraz tylny
						</p>
						<p>
							Przedni akton jest motorem napędowym dla większości wyciskań nad
							głowę, boczny izolujemy w dużym stopniu poprzez ruch unoszenia
							hantli bokiem, zaś tylny ma za zadanie odwodzić ramię w tył, więc
							aby go zaangażować, unoszenie wykonajmy w opadzie tułowia.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img
						src='../../img/photo/shoulders-1.PNG'
						alt='muscles anatomy model'
					/>
				</div>
			</div>
			<h3>Ćwiczenia na barki</h3>
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

export default ShouldersScreen;
