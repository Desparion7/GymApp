import './exercise.css';
import { useState } from 'react';

interface propsType {
	name: string;
	series: number;
	repeat?: number;
	weight?: number;
}
const Exercise = ({ name, series, repeat, weight }: propsType) => {
	const [repeatState, setRepeatState] = useState(repeat);
	const [weightState, setWeightState] = useState(weight);

	const handelWeightState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWeightState(Number(e.target.value));
	};
	const handelRepeatState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRepeatState(Number(e.target.value));
	};

	return (
		<>
			<div className='exerciesList__exercie'>
				<div className='exerciesList__name'>{name}</div>
				<div className='exerciesList__details'>
					<div className='exerciesList__series'>{`Seria ${series}`}</div>
					<label htmlFor='repeat'>Powtórzenia:</label>
					<input
						className='exerciesList__repeat'
						type='number'
						name='repeat'
						value={repeatState}
						onChange={handelRepeatState}
						max='999'
					></input>
					<label htmlFor='weight'>Ciężar w kg:</label>
					<input
						className='exerciesList__weight'
						type='number'
						name='weight'
						value={weightState}
						onChange={handelWeightState}
						max='999'
					></input>
				</div>
				<button>Usuń serię</button>
			</div>
		</>
	);
};
export default Exercise;
