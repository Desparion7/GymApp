import '../../css/MyRecordsScreen.css';
import {
	useGetAllRecordsQuery,
	useNewRecordMutation,
} from '../../app/slices/recordsApiSlice';
import LoadingSpinner from '../UI/LoadingSpinner';
import ModalSpinner from '../UI/ModalSpinner';
import SingleRecord from '../UI/SingleRecord';
import { useRef } from 'react';

const MyRecordsScreen = () => {
	const { data, isLoading } = useGetAllRecordsQuery();
	const [newRecord, { isLoading: newRecordLoading }] = useNewRecordMutation();

	const newRecordNameRef = useRef<HTMLInputElement>(null);
	const newRecordValueRef = useRef<HTMLInputElement>(null);

	const handlerNewRecord = async () => {
		if (newRecordNameRef.current?.value && newRecordValueRef.current?.value) {
			const recordName = newRecordNameRef.current.value;
			const recordAmount = newRecordValueRef.current.value;
			await newRecord({ recordName, recordAmount });
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
							placeholder='Nowy'
							ref={newRecordNameRef}
						/>
					</div>
					<input
						className='myRecordsScreen-box-record-input'
						type='text'
						ref={newRecordValueRef}
					/>
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
