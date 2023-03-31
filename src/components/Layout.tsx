import Header from './Header';
import Footer from './footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Layout = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Header />
			<Outlet></Outlet>
			<Footer />
		</div>
	);
};

export default Layout;
