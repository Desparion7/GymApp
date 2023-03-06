import '../../css/MyRecordsScreen.css';
import {
	useGetAllRecordsQuery,
	useNewRecordMutation,
} from '../../app/slices/recordsApiSlice';
import LoadingSpinner from '../UI/LoadingSpinner';
import ModalSpinner from '../UI/ModalSpinner';
import SingleRecord from '../UI/SingleRecord';
import { useState } from 'react';

const MyRecordsScreen = () => {
	const [newRecordName, setNewRecordName] = useState('');
	const [newRecordValue, setNewRecordValue] = useState('');
	const [addRecordError, setAddRecordError] = useState(false);

	const { data, isLoading } = useGetAllRecordsQuery();
	const [newRecord, { isLoading: newRecordLoading }] = useNewRecordMutation();

	const handlerNewRecord = async () => {
		if (newRecordName !== '' && newRecordValue !== '') {
			const recordName = newRecordName;
			const recordAmount = newRecordValue;
			await newRecord({ recordName, recordAmount });
			setAddRecordError(false);
			setNewRecordName('');
			setNewRecordValue('');
		} else {
			setAddRecordError(true);
		}
	};

	return (
		<section className='myRecordsScreen'>
			{isLoading && <LoadingSpinner />}
			{newRecordLoading && <ModalSpinner />}
			<h2>moje rekordy</h2>
			<div className='myRecordsScreen-box'>
				{data?.records &&
					data?.records.map((record) => (
						<SingleRecord
							key={record._id}
							id={record._id}
							recordName={record.recordName}
							recordAmount={record.recordAmount}
						/>
					))}
				<div className='myRecordsScreen-box-record'>
					<div className='myRecordsScreen-box-record-name'>
						<input
							className='myRecordsScreen-box-record-name-input'
							type='text'
							placeholder='Nazwa'
							value={newRecordName}
							onChange={(e) => {
								setNewRecordName(e.target.value);
							}}
						/>
					</div>
					<input
						className='myRecordsScreen-box-record-input'
						type='text'
						placeholder='wynik'
						value={newRecordValue}
						onChange={(e) => {
							setNewRecordValue(e.target.value);
						}}
					/>
					{addRecordError && (
						<p className='errorText'>Uzupełnij wszystkie pola</p>
					)}
					<div className='myRecordsScreen-box-record-btns'>
						<button className='btn' title='Dodaj' onClick={handlerNewRecord}>
							<img src='../../img/plus.PNG' alt='dodaj plus' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyRecordsScreen;
