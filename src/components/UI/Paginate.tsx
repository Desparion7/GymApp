import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './pagination.css';

interface propsType {
	page: number;
	pages: number;
}

export const Paginate = ({ page, pages }: propsType) => {
	const navigate = useNavigate();

	const pageChange = (e: any) => {
		navigate(`/profile/history/${e.selected + 1}`);
	};
	return pages > 1 ? (
		<>
			<ReactPaginate
				marginPagesDisplayed={1}
				breakLabel='...'
				nextLabel={<i className='fa-solid fa-angle-right'></i>}
				onPageChange={(e) => pageChange(e)}
				pageRangeDisplayed={2}
				pageCount={pages}
				forcePage={page - 1}
				previousLabel={<i className='fa-solid fa-chevron-left'></i>}
				containerClassName={'pagination-container'}
				activeClassName={'active-page'}
			/>
		</>
	) : (
		<></>
	);
};
export default Paginate;
