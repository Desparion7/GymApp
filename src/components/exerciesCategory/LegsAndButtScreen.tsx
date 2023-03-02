import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const LegsAndButtScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Dwugłowy Uda/Pośladki</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							W tej kategorii zamieszczone zostały ćwiczenia mocno angażujące
							mięśnie dwugłowe ud oraz pośladkowe. W ćwiczeniach opartych na
							wzorcu ruchowym hip hinge, który wykorzystywany jest w martwym
							ciągu, właśnie te mięśnie działają w ścisłej synergii.
						</p>
						<p>
							Głównym zadaniem mięśnia dwugłowego jest zginanie kolan, np. w
							ćwiczeniu żuraw. Pośladki zaś są bardzo mocnym prostownikiem stawu
							biodrowego, dlatego wykonują główną pracę przy takim ćwiczeniu jak
							unoszenie bioder ze sztangą.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img
						src='../../img/photo/legsbutt-1.PNG'
						alt='muscles anatomy model'
					/>
				</div>
			</div>
			<h3>Ćwiczenia na mięśnie dwugłowe/pośladki</h3>
			<div className='exerciesCategoryScreen__exercises'>
				<Link to='klasyczny-martwy-ciąg'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Klasyczny martwy ciąg</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/legsB-1.PNG'
								alt='klasyczny martwy ciąg'
							/>
						</div>
					</div>
				</Link>
				<Link to='unoszenie-bioder-ze-sztangą-w-oparciu-o-ławeczkę'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Unoszenie bioder ze sztangą w oparciu o ławeczkę</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/legsB-2.PNG'
								alt='Unoszenie bioder ze sztangą w oparciu o ławeczkę'
							/>
						</div>
					</div>
				</Link>
				<Link to='odwodzenie-nóg-na-maszynie'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Odwodzenie nóg na maszynie</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/legsB-3.PNG'
								alt='Odwodzenie nóg na maszynie'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default LegsAndButtScreen;
