import './footer.css';

const Footer = () => {
	const footerdate = new Date().toLocaleDateString('pl-PL', {
		year: 'numeric',
	});

	console.log(footerdate);
	return (
		<footer className='footer'>
			<div>{footerdate} &copy; Mateusz Woś</div>
		</footer>
	);
};

export default Footer;
