import { Toaster } from 'react-hot-toast';

const Toast = () => {
	return (
		<div>
			<Toaster
				toastOptions={{
					className: 'text-center',
					duration: 3000,
					position: 'top-center',
					style: {
						background: 'rgb(255,255,255)',
						color: 'rgb(0,0,0)',
						padding: '16px',
						border: '2px solid #792309',
					},
					success: {
						iconTheme: {
							primary: '#097918',
							secondary: 'rgb(255,255,255)',
						},
						style: {
							border: '2px solid #097918',
						},
					},
				}}
			/>
		</div>
	);
};

export default Toast;
