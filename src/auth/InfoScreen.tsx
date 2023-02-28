import React from 'react';
import { useSelector } from 'react-redux';
import { currentToken } from '../app/api/authSlice';

const InfoScreen = () => {
	const token = useSelector(currentToken);
	return (
		<section className='public '>
			{!token && (
				<div className='infoText'>
					Dziękujemy za skorzystanie z naszej usługi. Zostałeś pomyślnie
					wylogowany. Zapraszamy ponownie!
				</div>
			)}
		</section>
	);
};

export default InfoScreen;
