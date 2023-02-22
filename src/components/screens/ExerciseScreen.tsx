import '../../css/ExerciseScreen.css';
import { useParams } from 'react-router-dom';
import { useGetExerciseByUrlQuery } from '../../app/slices/exercisesApiSclice';

const ExerciseScreen = () => {
	const { url } = useParams() as { url: string };
	const { data } = useGetExerciseByUrlQuery({ url });

	return (
		<div className='exerciseScreen'>
			<h2>Atlas ćwiczeń</h2>
			<h3>{data?.exerciseName}</h3>
			<div className='exerciseScreen__info'>
				<img
					src={data?.imgPath}
					alt='Wyciskanie sztangi na ławce płaskiej'
				/>
				<div className='exerciseScreen__info-muscles'>
					<div>
						<p>Mięsnie główne zaangażowane w ruch:</p>
						<ul>
							<li>piersiowy większy</li>
							<li>trójgłowy ramienia</li>
							<li>naramienny przedni</li>
						</ul>
					</div>
					<div>
						<p>Mięsnie pomcnicze zaangażowane w ruch:</p>
						<ul>
							<li>zębaty przedni</li>
							<li>kruczo-ramienny</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='exerciseScreen__video'>
				{data?.videoUrl.map((video) => (
					<iframe
						key={video}
						width='300'
						height='240'
						src={video}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				))}
			</div>
		</div>
	);
};

export default ExerciseScreen;
