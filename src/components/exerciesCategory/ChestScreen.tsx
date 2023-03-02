import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const ChestScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Klatka piersiowa</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							W obrębie klatki piersiowej znajduje się wiele grup mięśni, ale
							najbardziej znanymi z nich są mięśnie piersiowe większe i
							mniejsze, mięsień podobojczykowy oraz zębaty przedni. Są one
							kluczowe dla utrzymania stabilności i prawidłowej postawy ciała.
						</p>
						<p>
							Najbardziej popularnym ćwiczeniem treningu klatki piersiowej jest
							wyciskanie sztangi na ławeczce płaskiej. Jednak warto pamiętać, że
							podczas tego ćwiczenia oprócz mięśni klatki piersiowej, aktywnie
							zaangażowane są również tricepsy oraz mięśnie naramienne.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img src='../../img/photo/chest-1.PNG' alt='muscles anatomy model' />
				</div>
			</div>
			<h3>Ćwiczenia na klatke piersiową</h3>
			<div className='exerciesCategoryScreen__exercises'>
				<Link to='wyciskanie-sztangi-na-ławce-płaskiej'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie sztangi na ławce płaskiej</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-1.PNG'
								alt='Wyciskanie sztangi na ławce płaskiej'
							/>
						</div>
					</div>
				</Link>
				<Link to='wyciskanie-sztangi-na-ławce-skośnej-głową-w-dół'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie sztangi na ławce skośnej głową w dół</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-2.PNG'
								alt='Wyciskanie sztangi na ławce skośnej głową w dół'
							/>
						</div>
					</div>
				</Link>
				<Link to='wyciskanie-sztangi-na-ławce-dodatniej-30-45°'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie sztangi na ławce dodatniej 30-45°</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-3.PNG'
								alt='Wyciskanie sztangi na ławce dodatniej 30-45°'
							/>
						</div>
					</div>
				</Link>
				<Link to='wyciskanie-hantelek-na-ławce-płaskiej'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie hantelek na ławce płaskiej</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-4.PNG'
								alt='Wyciskanie hantelek na ławce płaskiej'
							/>
						</div>
					</div>
				</Link>
				<Link to='wyciskanie-hantelek-na-ławce-dodatniej-30-45°'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie hantelek na ławce dodatniej 30-45°</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-5.PNG'
								alt='Wyciskanie hantelek na ławce dodatniej 30-45°'
							/>
						</div>
					</div>
				</Link>
				<Link to='wyciskanie-hantelek-na-ławce-skośnej-głową-w-dół'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Wyciskanie hantelek na ławce skośnej głową w dół</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-6.PNG'
								alt='Wyciskanie hantelek na ławce skośnej głową w dół'
							/>
						</div>
					</div>
				</Link>
				<Link to='rozpiętki-z-wykorzystaniem-wyciągu-dolnego'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Rozpiętki z wykorzystaniem wyciągu dolnego</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/chest-7.PNG'
								alt='Rozpiętki z wykorzystaniem wyciągu dolnego'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ChestScreen;
