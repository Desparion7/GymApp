import '../../css/TrainingPlansScreen.css';
import { Link } from 'react-router-dom';

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
						<Link to='zestaw-ogólnorozwojowy-1-3' className='trainingPlansScreen__box-name'>
							Zestaw ogólnorozwojowy nr 1 <span>➡</span>
						</Link>
						<Link to='/' className='trainingPlansScreen__box-name'>
							Zestaw ogólnorozwojowy nr 2 <span>➡</span>
						</Link>
						<Link to='/' className='trainingPlansScreen__box-name'>
							Zestaw ogólnorozwojowy nr 3 <span>➡</span>
						</Link>
					</div>
					<div>
						<Link to='/' className='trainingPlansScreen__box-name'>
							Zestaw klatka piersiowa i triceps <span>➡</span>
						</Link>
						<Link to='/' className='trainingPlansScreen__box-name'>
							Zestaw plecy i barki <span>➡</span>
						</Link>
						<Link to='/' className='trainingPlansScreen__box-name'>
							Zestaw nogi i biceps <span>➡</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrainingPlansScreen;
