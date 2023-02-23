import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const LegsScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Czworogłowy Uda</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Poniższe pozycje przedstawiają w większości ćwiczenia
							wielostawowe, co oznacza, że podczas jednego ruchu oddziałujemy na
							wiele stawów i mięśni. Ćwiczenia znajdujące się w tej kategorii
							bardzo mocno angażują mięśnie czworogłowe ud, dlatego zostały
							sklasyfikowane właśnie w tym miejscu.
						</p>
						<p>
							Głównym zadaniem mięśnia jest wyprost w stawie kolanowym, a więc
							każde ćwiczenie wymagające tego ruchu będzie angażować mięsień
							czworogołowy uda.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img src='../../img/photo/legs-1.PNG' alt='muscles anatomy model' />
				</div>
			</div>
			<h3>Ćwiczenia na mięśnie nóg</h3>
			<div className='exerciesCategoryScreen__exercises'>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Przysiad wykroczny z hantlami</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='przysiad-wykroczny-z-hantlami'>
							<img
								src='../../img/photo/exercise/legs-1.PNG'
								alt='Przysiad wykroczny z hantlami'
							/>
						</Link>
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Przysiad ze sztangą trzymaną na plecach</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='przysiad-ze-sztangą-trzymaną-na-plecach'>
							<img
								src='../../img/photo/exercise/legs-2.PNG'
								alt='Przysiad ze sztangą trzymaną na plecach'
							/>
						</Link>
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Przysiad ze sztangą trzymaną z przodu</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<Link to='przysiad-ze-sztangą-trzymaną-z-przodu'>
							<img
								src='../../img/photo/exercise/legs-3.PNG'
								alt='Przysiad ze sztangą trzymaną na barkach'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegsScreen;
