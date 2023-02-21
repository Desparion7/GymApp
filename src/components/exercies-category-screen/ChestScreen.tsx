import '../../css/ExerciesCategoryScreen.css';

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
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Wyciskanie sztangi na ławcę płaskiej</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<img src='../../img/photo/exercise/chest-1.PNG' alt='' />
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Wyciskanie sztangi na ławcę skośnej głową w dół</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<img src='../../img/photo/exercise/chest-2.PNG' alt='' />
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Wyciskanie sztangi na ławcę płaskiej</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<img src='../../img/photo/chest.PNG' alt='' />
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Wyciskanie hantelek na ławcę płaskiej</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<img src='../../img/photo/chest.PNG' alt='' />
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Wyciskanie hantelek na ławcę dodatniej 30-45°</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<img src='../../img/photo/chest.PNG' alt='' />
					</div>
				</div>
				<div className='exerciesCategoryScreen__exercise-smallbox'>
					<h4>Wyciskanie hantelek na ławcę skośnej głową w dół</h4>
					<div className='exerciesCategoryScreen__exercise-smallbox-img'>
						<img src='../../img/photo/chest.PNG' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChestScreen;
