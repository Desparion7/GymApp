import './modalspinner.css';
import ReactDOM from 'react-dom';
import { Backdrop } from './Modal';



const SmallSpinner = () => {
	return (
		<div>
			<div className='smallSpinner-box'>
				<div className='lds-ring-small'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

const ModalSpinner = () => {
	return (
		<div className='modal'>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')!
			)}
			{ReactDOM.createPortal(
				<SmallSpinner />,
				document.getElementById('popup-root')!
			)}
		</div>
	);
};

export default ModalSpinner;
