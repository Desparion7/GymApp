import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const BackScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Plecy</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Nasz grzbiet to cała grupa mięśni pełniących wiele funkcji. Dobrze
							rozwinięte sprawiają, że sylwetka nabiera kształtu litery V. Do
							największych i najbardziej widocznych możemy zaliczyć mięśnie
							najszerszy i czworoboczny oraz prostownik grzbietu.
						</p>
						<p>
							Aby trening pleców był kompletny, pamiętajmy o wykonaniu ćwiczeń
							opartych na przyciąganiu wertykalnym, np. podciąganie na drążku,
							oraz horyzontalnym, np. wiosłowanie sztangą.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img src='../../img/photo/back-1.PNG' alt='muscles anatomy model' />
				</div>
			</div>
			<h3>Ćwiczenia na plecy</h3>
			<div className='exerciesCategoryScreen__exercises'>
				<Link to='podciąganie-na-drążku-trzymanym-nachwytem'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Podciąganie na drążku trzymanym nachwytem</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/back-1.PNG'
								alt='Podciąganie na drążku trzymanym nachwytem'
							/>
						</div>
					</div>
				</Link>
				<Link to='wiosłowanie-sztangą-w-opadzie-tułowia'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wiosłowanie sztangą opadzie tułowia</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/back-2.PNG'
								alt='Wiosłowanie sztangą opadzie tułowia'
							/>
						</div>
					</div>
				</Link>
				<Link to='wiosłowanie-hantlą-podpartym-na-ławeczce'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wiosłowanie hantlą podpartym na ławeczce</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/back-3.PNG'
								alt='Wiosłowanie hantlą podpartym na ławeczce'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BackScreen;
