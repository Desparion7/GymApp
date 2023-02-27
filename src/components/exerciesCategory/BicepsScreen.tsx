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
				<Link to='zginanie-przedramion-z-gryfem-łamanym-na-modlitewniku'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Zginanie przedramion z gryfem łamanym na modlitewniku</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/biceps-1.PNG'
								alt='zginanie przedramion z gryfem łamanym na modlitewniku'
							/>
						</div>
					</div>
				</Link>
				<Link to='zginanie-przedramion-z-hantlami-w-chwycie-młotkowym'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Zginanie przedramion z hantlami w chwycie młotkowym</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/biceps-2.PNG'
								alt='Zginanie przedramion z hantlami w chwycie młotkowym'
							/>
						</div>
					</div>
				</Link>
				<Link to='zginanie-przedramion-ze-sztangą-stojąc'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Zginanie przedramion ze sztangą stojąc</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/biceps-3.PNG'
								alt='Zginanie przedramion ze sztangą stojąc'
							/>
						</div>
					</div>
				</Link>
				<Link to='zginanie-przedramion-stojąc-z-wykorzystaniem-wyciągów-górnych'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>
							Zginanie przedramion stojąc z wykorzystaniem wyciągów górnych
						</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/biceps-4.PNG'
								alt='Zginanie przedramion stojąc z wykorzystaniem wyciągów górnych'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BicepsScreen;
