import '../../css/TrainingPlansScreen.css';
import { Link } from 'react-router-dom';
import Offert from '../UI/Offert';

const TrainingPlansScreen = () => {
	return (
		<section className='trainingPlansScreen'>
			<div className='trainingPlansScreen__main'>
				<h2>Przykładowe plany trenigowe</h2>
				<h3>
					Poniżej prezentujemy przykładowe plany treningowe, jakie możesz
					zastosować.
				</h3>
				<p>
					Pamiętaj, że dane zestawy posiadają powtórzenia, serie oraz obciążenie
					nieprzystosowane do Ciebie. Wczytując dany zestaw treningowy należy
					dostosować dane parametry do swojego poziomu zaawansowania. Załadowane
					treningi można dowolnie modyfikować. Pamiętaj, jednak żeby nie
					przetrenowywać zbyt intensywnie jedne partie mięsniowe kosztem innych.
				</p>

				<div className='trainingPlansScreen__box'>
					<div>
						<Link
							to='zestaw-ogólnorozwojowy-1-3'
							className='trainingPlansScreen__box-name'
						>
							<span>➡</span> Zestaw ogólnorozwojowy numer 1
						</Link>
						<Link
							to='zestaw-ogólnorozwojowy-2-3'
							className='trainingPlansScreen__box-name'
						>
							<span>➡</span> Zestaw ogólnorozwojowy numer 2
						</Link>
						<Link
							to='zestaw-ogólnorozwojowy-3-3'
							className='trainingPlansScreen__box-name'
						>
							<span>➡</span> Zestaw ogólnorozwojowy numer 3
						</Link>
					</div>
					<div>
						<Link
							to='zestaw-klatka-piersiowa-triceps'
							className='trainingPlansScreen__box-name'
						>
							<span>➡</span> Zestaw klatka piersiowa i triceps
						</Link>
						<Link
							to='zestaw-plecy-barki'
							className='trainingPlansScreen__box-name'
						>
							<span>➡</span> Zestaw plecy i barki
						</Link>
						<Link
							to='zestaw-nogi-biceps'
							className='trainingPlansScreen__box-name'
						>
							<span>➡</span> Zestaw nogi i biceps
						</Link>
					</div>
				</div>
			</div>
			<h2>Plany indywidualne</h2>
			<Offert />
		</section>
	);
};

export default TrainingPlansScreen;
