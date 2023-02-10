import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
	const [menu, setMenu] = useState<boolean>(false);

	const content = (
		<nav className='nav'>
			<div className='navbar'>
				<h1>Menadżer Treningu</h1>
				<div className='navbar__options'>
					<ul className='navbar__options-ul'>
						<li>Atlas ćwiczeń</li>
						<li>Plany treningowe</li>
						<li>Ciekawostki</li>
						<li>Moje konto</li>
					</ul>
				</div>
				<button
					className='navbarMobile__containter'
					onClick={() => setMenu(!menu)}
				>
					<div className='navbarMobile__containter-menuButton'></div>
				</button>
			</div>
			{menu && (
				<div className='navbarMobile__options'>
					<ul className='navbarMobile__options-ul'>
						<li>Atlas ćwiczeń</li>
						<li>Plany treningowe</li>
						<li>Ciekawostki</li>
						<li>Moje konto</li>
					</ul>
				</div>
			)}
		</nav>
	);
	return content;
};

export default Navbar;
