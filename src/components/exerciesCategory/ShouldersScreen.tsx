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
				<Link to='wyciskanie-sztangi-nad-głowę'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie sztangi nad głowę</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/shoulders-1.PNG'
								alt='Wyciskanie sztangi nad głowę'
							/>
						</div>
					</div>
				</Link>
				<Link to='wyciskanie-hantli-nad-głowę-siedząc'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie hantli nad głowę siedząc</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/shoulders-2.PNG'
								alt='Wyciskanie hantli nad głowę siedząc'
							/>
						</div>
					</div>
				</Link>
				<Link to='odwodzenie-ramion-w-bok-ze-sztangielkami'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Odwodzenie ramion w bok ze sztangielkami</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/shoulders-3.PNG'
								alt='Odwodzenie ramion w bok ze sztangielkami'
							/>
						</div>
					</div>
				</Link>
				<Link to='przyciąganie-liny-z-wyciągu-do-twarzy-(Face pull)'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Przyciąganie liny z wyciągu do twarzy (Face pull)</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/shoulders-4.PNG'
								alt='Przyciąganie liny z wyciągu do twarzy (Face pull)'
							/>
						</div>
					</div>
				</Link>
				<Link to='naprzemianstronne-unoszenie-ramion-w-przód-ze-sztangielkami'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Naprzemianstronne unoszenie ramion w przód ze sztangielkami</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/shoulders-5.PNG'
								alt='Naprzemianstronne unoszenie ramion w przód ze sztangielkami'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ShouldersScreen;
