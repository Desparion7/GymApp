import './exercise.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface exercisePropsType {
	name?: string;
	repeat?: number;
	weight?: number;
	time?: boolean;
	url?: string;
	onDelete: () => void;
	onChangeWeight: (weightState: number) => void;
	onChangeRepeat: (repeatState: number) => void;
}
const Exercise = ({
	name,
	repeat,
	weight,
	time,
	url,
	onDelete,
	onChangeWeight,
	onChangeRepeat,
}: exercisePropsType) => {
	const [repeatState, setRepeatState] = useState<number | undefined>(repeat);
	const [weightState, setWeightState] = useState<number | undefined>(weight);

	const handelWeightState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWeightState(Number(e.target.value));
	};
	const handelRepeatState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRepeatState(Number(e.target.value));
	};
	const handleDeleteClick = () => {
		onDelete();
	};
	const handelOnBlureWeight = () => {
		if (weightState) {
			onChangeWeight(weightState);
		}
	};
	const handelOnBlureRepeat = () => {
		if (repeatState) {
			onChangeRepeat(repeatState);
		}
	};

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
					{!time && <label htmlFor='repeat'>Powtórzenia:</label>}
					{time && <label htmlFor='repeat'>Czas w min:</label>}
					<input
						className='exerciesList__repeat'
						type='number'
						name='repeat'
						value={repeatState}
						onChange={handelRepeatState}
						onBlur={handelOnBlureRepeat}
						max='999'
					></input>
				</div>

				<div>
					<label htmlFor='weight'> kg:</label>
					<input
						className='exerciesList__weight'
						type='number'
						name='weight'
						value={weightState}
						onChange={handelWeightState}
						max='999'
						onBlur={handelOnBlureWeight}
					></input>
				</div>
				<button
					className='exerciesList__exercie-removeBtn'
					title='usuń serię'
					onClick={handleDeleteClick}
				>
					<img src='../../img/trash.PNG' />
				</button>
			</div>
		</div>
	);
};

export default Exercise;