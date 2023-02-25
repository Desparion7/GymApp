import '../../css/ExerciesCategoryScreen.css';
import { Link } from 'react-router-dom';

const TricepsScreen = () => {
	return (
		<div className='exerciesCategoryScreen'>
			<h2>Atlas ćwiczeń</h2>
			<div className='exerciesCategoryScreen__box'>
				<div className='exerciesCategoryScreen__box-info'>
					<h3>Triceps</h3>
					<div className='exerciesCategoryScreen__box-info-text'>
						<p>
							Mięsień zajmujący około 2/3 objętości naszego ramienia. Jest
							złożony z 3 głów: bocznej, długiej oraz przyśrodkowej. Głównym
							zadaniem mięśnia jest wyprost w stawie łokciowym, a więc każde
							ćwiczenie, w którym go wykonujemy, będzie angażować nasze
							tricepsy.
						</p>
						<p>
							Do najpopularniejszych ćwiczeń zaliczamy pompki na poręczach,
							czyli ćwiczenie z ciężarem własnego ciała, oraz wyciskanie
							francuskie, które przeważnie wykonujemy przy pomocy sztangi
							łamanej lub hantli.
						</p>
					</div>
				</div>
				<div className='exerciesCategoryScreen__box-img'>
					<img
						src='../../img/photo/triceps-1.PNG'
						alt='muscles anatomy model'
					/>
				</div>
			</div>
			<h3>Ćwiczenia na triceps</h3>
			<div className='exerciesCategoryScreen__exercises'>
				<Link to='pompki-na-triceps-na-poręczach'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Pompki na triceps na poręczach</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/triceps-1.PNG'
								alt='Pompki na triceps na poręczach'
							/>
						</div>
					</div>
				</Link>
				<Link to='prostowanie-przedramion-nachwytem-z-wyciągu-górnego'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Prostowanie przedramion nachwytem z wyciągu górnego</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/triceps-2.PNG'
								alt='Prostowanie przedramion nachwytem z wyciągu górnego'
							/>
						</div>
					</div>
				</Link>
				<Link to='prostowanie-przedramion-ze-sztangą-łamanąna-na-ławce-płaskiej'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Prostowanie przedramion ze sztangą łamanąna na ławce płaskiej</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/triceps-3.PNG'
								alt='Prostowanie przedramion ze sztangą łamanąna na ławce płaskiej'
							/>
						</div>
					</div>
				</Link>
				<Link to='prostowanie-przedramienia-w-pionie-ze-sztangielką'>
					<div className='exerciesCategoryScreen__exercise-smallbox'>
						<h4>Prostowanie przedramienia w pionie ze sztangielką</h4>
						<div className='exerciesCategoryScreen__exercise-smallbox-img'>
							<img
								src='../../img/photo/exercise/triceps-4.PNG'
								alt='Prostowanie przedramienia w pionie ze sztangielką'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default TricepsScreen;
