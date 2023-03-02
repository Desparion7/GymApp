import './exercise.css';
import { Link } from 'react-router-dom';

export interface exercisePropsType {
	name?: string;
	repeat?: number;
	weight?: number;
	time?: boolean;
	url?: string;
}
const ExerciseStatic = ({
	name,
	repeat,
	weight,
	time,
	url,
}: exercisePropsType) => {
	return (
		<div className='exerciesList__exercie'>
			{url ? (
				<Link to={`/atlas/${url}`}>
					<div className='exerciesList__name'>{name}</div>
				</Link>
			) : (
				<div className='exerciesList__name'>{name}</div>
			)}
			<div className='exerciesList__details'>
				<div>
					<div className='exerciesList__repeat'>
						{!time ? 'Powtórzenia:' : 'Czas w min:'} {repeat}
					</div>
				</div>

				<div>
					<div className='exerciesList__weight'>kg: {weight}</div>
				</div>
			</div>
		</div>
	);
};

export default ExerciseStatic;
