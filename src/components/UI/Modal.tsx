import ReactDOM from 'react-dom';
import './modal.css';

interface modalPropsType {
	modalTitle: string;
	modalText: string;
	leftBtn: () => void;
	leftBtnText: string;
	rightBtn: ((id: string) => Promise<void>) | (() => void);
	rightBtnText: string;
	id: string;
}

export const Backdrop = () => {
	return <div className='backdrop'></div>;
};

const Popup = ({
	modalTitle,
	modalText,
	leftBtn,
	leftBtnText,
	rightBtn,
	rightBtnText,
	id,
}: modalPropsType) => {
	return (
		<div className='popup slide-bottom'>
			<div className='popup-window'>
				<div className='popup-window-title'>{modalTitle}</div>
				<div className='popup-window-body'>
					<div className='popup-window-text'>{modalText}</div>
					<div className='popup-window-button-box'>
						<button
							className='popup-window-btn popup-btn-left'
							onClick={leftBtn}
						>
							{leftBtnText}
						</button>
						<button
							className='popup-window-btn popup-btn-right '
							onClick={() => rightBtn(id)}
						>
							{rightBtnText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Modal = ({
	modalTitle,
	modalText,
	leftBtn,
	leftBtnText,
	rightBtn,
	rightBtnText,
	id,
}: modalPropsType) => {
	return (
		<div className='modal'>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')!
			)}
			{ReactDOM.createPortal(
				<Popup
					modalTitle={modalTitle}
					modalText={modalText}
					leftBtn={leftBtn}
					leftBtnText={leftBtnText}
					rightBtn={rightBtn}
					rightBtnText={rightBtnText}
					id={id}
				></Popup>,
				document.getElementById('popup-root')!
			)}
		</div>
	);
};

export default Modal;
