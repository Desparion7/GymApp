import '../../css/ExerciseScreen.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetExerciseByUrlQuery } from '../../app/slices/exercisesApiSclice';
import useAuthToken from '../../hooks/useAuthToken';
import {
	lastUsedTraining,
	setlastExercise,
	lastUsedSet,
} from '../../app/api/userInfoSlice';

const ExerciseScreen = () => {
	const { url, category } = useParams() as { url: string; category: string };
	const { data } = useGetExerciseByUrlQuery({ url });
	const { username } = useAuthToken();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const trainingId = useSelector(lastUsedTraining);
	const setId = useSelector(lastUsedSet);
	// function do add exercise to active training
	const handelAddExerciseToTraining = () => {
		dispatch(
			setlastExercise({
				exerciseName: data?.exerciseName,
				url: `${category}/${data?.url}`,
				time: data?.time,
			})
		);
		if (!username) {
			navigate(`/`);
			return;
		}
		if (trainingId === null) {
			navigate(`/profile`);
		} else {
			navigate(`/profile/trening/${trainingId}`);
		}
	};
	// function do add exercise to active set
	const handelAddExerciseToSet = () => {
		dispatch(
			setlastExercise({
				exerciseName: data?.exerciseName,
				url: `${category}/${data?.url}`,
				time: data?.time,
			})
		);
		if (!username) {
			navigate(`/`);
			return;
		}
		if (setId === null) {
			navigate(`/profile/moje-plany-treningowe`);
		} else {
			navigate(`/profile/moje-plany-treningowe/${setId}`);
		}
	};

	return (
		<div className='exerciseScreen'>
			<h2>Atlas ćwiczeń</h2>
			<h3>{data?.exerciseName}</h3>
			<div className='exerciseScreen__info'>
				<img src={data?.imgPath} alt={data?.exerciseName} />
				<div className='exerciseScreen__info-muscles'>
					<button className='greenBtn' onClick={handelAddExerciseToTraining}>
						Dodaj ćwiczenie do treningu
					</button>
					<button className='greenBtn' onClick={handelAddExerciseToSet}>
						Dodaj ćwiczenie do zestawu
					</button>

					{data?.muscle1 && data?.muscle1?.length !== 0 && (
						<div>
							<p>Mięsnie główne zaangażowane w ruch:</p>
							<ul>
								{data?.muscle1.map((muscle, index) => (
									<li key={index}>{muscle}</li>
								))}
							</ul>
						</div>
					)}
					{data?.muscle2 && data?.muscle2.length !== 0 && (
						<div>
							<p>Mięsnie pomcnicze zaangażowane w ruch::</p>
							<ul>
								{data?.muscle2.map((muscle, index) => (
									<li key={index}>{muscle}</li>
								))}
							</ul>
						</div>
					)}
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
