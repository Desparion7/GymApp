import { Link } from 'react-router-dom';
import '../../css/AtlasScreen.css';
const AtlasScreen = () => {
	return (
		<section className='atlas'>
			<h2>Atlas Ćwiczeń</h2>
			<div className='atlas__category'>
				<div className='atlas__category-exerciseBox'>
					<Link to='/atlas/klatka-piersiowa'>
						<img src='../../img/photo/chest.PNG' alt='chest exercise' />
						<div className='atlas__category-exerciseBox-title'>
							Klatka piersiowa
						</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='/atlas/plecy'>
						<img src='../../img/photo/back.PNG' alt='back exercise' />
						<div className='atlas__category-exerciseBox-title'>plecy</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='czworoglowe-uda'>
						<img
							src='../../img/photo/quadriceps.PNG'
							alt='quadriceps exercise'
						/>
						<div className='atlas__category-exerciseBox-title'>
							Czworogłowe uda
						</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='dwuglowe-uda'>
						<img
							src='../../img/photo/duble-headed.PNG'
							alt='duble-headed exercise'
						/>
						<div className='atlas__category-exerciseBox-title'>
							Dwugłowe uda/pośladki
						</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='barki'>
						<img src='../../img/photo/shoulders.PNG' alt='shoulders exercise' />
						<div className='atlas__category-exerciseBox-title'>Barki</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='brzuch'>
						<img src='../../img/photo/belly.PNG' alt='belly exercise' />
						<div className='atlas__category-exerciseBox-title'>Brzuch</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='biceps'>
						<img src='../../img/photo/biceps.PNG' alt='biceps exercise' />
						<div className='atlas__category-exerciseBox-title'>Biceps</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='triceps'>
						<img src='../../img/photo/triceps.PNG' alt='triceps exercise' />
						<div className='atlas__category-exerciseBox-title'>Triceps</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='łydki'>
						<img src='../../img/photo/calves.PNG' alt='calves exercise' />
						<div className='atlas__category-exerciseBox-title'>łydki</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='ćwiczenia-domowe'>
						<img src='../../img/photo/home.PNG' alt='man exercise in home' />
						<div className='atlas__category-exerciseBox-title'>
							Ćwiczenia domowe
						</div>
					</Link>
				</div>
				<div className='atlas__category-exerciseBox'>
					<Link to='moje-ćwiczenia'>
						<img src='../../img/photo/custom.PNG' alt='gym equipment' />
						<div className='atlas__category-exerciseBox-title'>
							Moje ćwiczenia
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AtlasScreen;
