import './exercise.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Modal from './Modal';

export interface exercisePropsType {
	name?: string;
	repeat?: number | string;
	weight?: number | string;
	time?: boolean;
	url?: string;
	check?: boolean;
	onDelete: () => void;
	onChangeWeight: (weightState: number | string) => void;
	onChangeRepeat: (repeatState: number | string) => void;
	onChangeCheck?: (checkState: boolean) => void;
	isTraining?: boolean;
}
const Exercise = ({
	name,
	repeat,
	weight,
	time,
	url,
	check,
	onDelete,
	onChangeWeight,
	onChangeRepeat,
	onChangeCheck,
	isTraining,
}: exercisePropsType) => {
	const [repeatState, setRepeatState] = useState<string | number>('');
	const [weightState, setWeightState] = useState<string | number | undefined>(
		weight
	);
	const [checkState, setCheckState] = useState<boolean>(false);
	const [showModal, setShowModal] = useState(false);

	const inputRefRepeat = useRef<HTMLInputElement>(null);
	const inputRefWeight = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (repeat) {
			setRepeatState(repeat);
		}
		if (weight) {
			setWeightState(weight);
		}
		if (check === false || check === true) {
			setCheckState(check);
		}
	}, [check, weight, repeat]);

	const handleInputRepeat = () => {
		if (inputRefRepeat.current) {
			inputRefRepeat.current.select();
		}
	};
	const handleInputWeight = () => {
		if (inputRefWeight.current) {
			inputRefWeight.current.select();
		}
	};

	const handelWeightState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWeightState(e.target.value);
	};
	const handelRepeatState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRepeatState(e.target.value);
	};
	const handleDeleteClick = () => {
		onDelete();
	};
	const handelOnBlureWeight = () => {
		console.log('ok');
		if (weightState) {
			onChangeWeight(weightState);
		}
	};
	const handelOnBlureRepeat = () => {
		if (repeatState) {
			onChangeRepeat(repeatState);
		}
	};
	const handelChangeCheck = () => {
		if (onChangeCheck) {
			onChangeCheck(!checkState);
		}
	};
	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<>
			{' '}
			{showModal && (
				<Modal
					modalTitle={'Usuwanie serii'}
					modalText={'Czy chcesz usunąć daną serię?'}
					rightBtn={handleDeleteClick}
					rightBtnText={'Tak'}
					leftBtn={closeModalHandler}
					leftBtnText={'Anuluj'}
					id='1'
				></Modal>
			)}
			<div className='exerciesList__exercie'>
				{url ? (
					<Link to={`/atlas/${url}`}>
						<div className='exerciesList__name'>{name}</div>
					</Link>
				) : (
					<div className='exerciesList__name'>{name}</div>
				)}
				<div className='exerciesList__details'>
					<div className='exerciesList__details-box'>
						{!time && <label htmlFor='repeat'>Powtórzenia:</label>}
						{time && <label htmlFor='repeat'>Minut: </label>}
						<input
							className='exerciesList__repeat'
							type='number'
							name='repeat'
							value={repeatState}
							onChange={handelRepeatState}
							onBlur={handelOnBlureRepeat}
							onClick={handleInputRepeat}
							ref={inputRefRepeat}
							max='999'
						></input>
					</div>

					<div className='exerciesList__details-box'>
						<label htmlFor='weight'> kg:</label>
						<input
							className='exerciesList__weight'
							type='number'
							name='weight'
							value={weightState}
							onChange={handelWeightState}
							onClick={handleInputWeight}
							ref={inputRefWeight}
							max='999'
							onBlur={handelOnBlureWeight}
						></input>
					</div>
					{isTraining && (
						<button
							className='exerciesList__exercie-removeBtn'
							title='odznacz'
							onClick={() => {
								setCheckState(!checkState);
								handelChangeCheck();
							}}
						>
							{check && <img src='../../img/check.PNG' />}
							{!check && <img src='../../img/checkno.PNG' />}
						</button>
					)}
					{!isTraining && (
						<button
							className='exerciesList__exercie-removeBtn'
							title='zapisz'
							onClick={() => {
							
							}}
						>
							{<img src='../../img/save.PNG' />}
						</button>
					)}
					<button
						className='exerciesList__exercie-removeBtn'
						title='usuń serię'
						onClick={() => {
							setShowModal(true);
						}}
					>
						<img src='../../img/trash.PNG' />
					</button>
				</div>
			</div>
		</>
	);
};

export default Exercise;
