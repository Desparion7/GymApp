import { Link } from 'react-router-dom';
import '../../css/AtlasScreen.css';
const AtlasScreen = () => {
	return (
		<section className='atlas'>
			<h2>Atlas Ćwiczeń</h2>
			<div className='atlas__category'>
				<div className='atlas__category-exerciseBox'>
					<Link to='/atlas/chest'>
						<img src='../../img/photo/chest.PNG' alt='chest exercise' />
						<div className='atlas__category-exerciseBox-title'>
							Klatka piersiowa
						</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/back.PNG' alt='back exercise' />
					<div className='atlas__category-exerciseBox-title'>plecy</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/quadriceps.PNG' alt='quadriceps exercise' />
					<div className='atlas__category-exerciseBox-title'>
						Czworogłowe uda
					</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img
						src='../../img/photo/duble-headed.PNG'
						alt='duble-headed exercise'
					/>
					<div className='atlas__category-exerciseBox-title'>
						Dwugłowe uda/pośladki
					</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/shoulders.PNG' alt='shoulders exercise' />
					<div className='atlas__category-exerciseBox-title'>Barki</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/belly.PNG' alt='belly exercise' />
					<div className='atlas__category-exerciseBox-title'>Brzuch</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/biceps.PNG' alt='biceps exercise' />
					<div className='atlas__category-exerciseBox-title'>Biceps</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/triceps.PNG' alt='triceps exercise' />
					<div className='atlas__category-exerciseBox-title'>Triceps</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/calves.PNG' alt='calves exercise' />
					<div className='atlas__category-exerciseBox-title'>łydki</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/home.PNG' alt='man exercise in home' />
					<div className='atlas__category-exerciseBox-title'>
						Ćwiczenia domowe
					</div>
				</div>
				<div className='atlas__category-exerciseBox'>
					<img src='../../img/photo/custom.PNG' alt='gym equipment' />
					<div className='atlas__category-exerciseBox-title'>
						Moje ćwiczenia
					</div>
				</div>
			</div>
		</section>
	);
};

export default AtlasScreen;
