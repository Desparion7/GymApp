import { useState } from 'react';
import {
	useUpdateRecordMutation,
	useDeleteRecordMutation,
} from '../../app/slices/recordsApiSlice';
import ModalSpinner from './ModalSpinner';

interface Record {
	id: string;
	recordName: string;
	recordAmount: string;
}

const SingleRecord = ({ id, recordName, recordAmount }: Record) => {
	const [recordValue, setRecordValue] = useState(recordAmount);

	const [updateRecord, { isLoading }] = useUpdateRecordMutation();
	const [deleteRecord, { isLoading: deleteRecordLoading }] =
		useDeleteRecordMutation();

	const handlerUpdate = async (id: string) => {
		await updateRecord({ id, recordValue });
	};
	const handlerDeleteRecord = async (id: string) => {
		await deleteRecord(id);
	};

	return (
		<div className='myRecordsScreen-box-record' key={id}>
			{isLoading && <ModalSpinner />}
			{deleteRecordLoading && <ModalSpinner />}
			<div className='myRecordsScreen-box-record-name'>{recordName}</div>
			<input
				className='myRecordsScreen-box-record-input'
				type='text'
				value={recordValue}
				onChange={(e) => {
					setRecordValue(e.target.value);
				}}
			/>
			<div className='myRecordsScreen-box-record-btns'>
				<button
					className='btn'
					onClick={() => {
						handlerDeleteRecord(id);
					}}
					title='usuń'
				>
					<img src='../../img/trash.PNG' alt='smietniczek' />
				</button>
				<button
					title='zapisz'
					className='btn'
					onClick={() => {
						handlerUpdate(id);
					}}
				>
					<img src='../../img/save.PNG' alt='zapis dyskietka' />
				</button>
			</div>
		</div>
	);
};

export default SingleRecord;
