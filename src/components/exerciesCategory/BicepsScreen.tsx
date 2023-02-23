import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const BicepsScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Dwugłowy Biceps</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Jak sama nazwa wskazuje, jest to mięsień składający się z dwóch
							głów. Głowa krótka znajduje się po wewnętrznej stronie ramienia,
							głowa długa na zewnątrz. Zaraz pod nimi znajduje się mięsień
							ramienny, który wraz z bicepsem ugina staw łokciowy.
						</p>
						<p>
							Podstawowe ćwiczenia mające na celu rozwijać nasze bicepsy to
							uginania ramion z hantlami lub sztangą. Nie zapominajmy jednak o
							bardzo dużym zaangażowaniu bicepsów oraz mięśni ramiennych w
							ćwiczeniach mięśni grzbietu.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img src='../../img/photo/biceps-1.PNG' alt='muscles anatomy model' />
				</div>
			</div>
			<h3>Ćwiczenia na biceps</h3>
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

export default BicepsScreen;
