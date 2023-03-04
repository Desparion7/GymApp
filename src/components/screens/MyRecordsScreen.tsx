import '../../css/MyRecords.css';
import { useGetAllRecordsQuery } from '../../app/slices/recordsApiSlice';
import LoadingSpinner from '../UI/LoadingSpinner';

const MyRecordsScreen = () => {
	const { data, isLoading } = useGetAllRecordsQuery();

	return (
		<section className='myRecordsScreen'>
			{isLoading && <LoadingSpinner />}
			<h2>moje rekordy</h2>
			<div className='myRecordsScreen-box'>
				{data?.records &&
					data?.records.map((record) => (
						<div className='myRecordsScreen-box-record' key={record._id}>
							<div className='myRecordsScreen-box-record-name'>
								{record.recordName}
							</div>
							<div className='myRecordsScreen-box-record-amount'>
								{record.recordAmount}
							</div>
							<input
								type='text'
								value={record.recordAmount}
								onChange={() => {}}
							/>
							<button className='greenBtn'>Zmień</button>
						</div>
					))}
			</div>
		</section>
	);
};

export default MyRecordsScreen;
