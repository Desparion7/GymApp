import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthToken from '../../hooks/useAuthToken';

const Navbar = () => {
	const [menu, setMenu] = useState<boolean>(false);
	const { username, isAdmin } = useAuthToken() as {
		username: string;
		isAdmin: boolean;
	};

	const content = (
		<nav className='nav'>
			<div className='navbar'>
				<h1>Menadżer Treningu</h1>
				<div className='navbar__options'>
					<ul className='navbar__options-ul'>
						<li>
							<Link to='/'>Atlas ćwiczeń</Link>
						</li>
						<li>
							<Link to='/'>Plany treningowe</Link>
						</li>
						<li>
							<Link to='/'>Ciekawostki</Link>
						</li>
						{username ? (
							<li>
								<Link to='/'>Moje konto</Link>
							</li>
						) : (
							<li>
								<Link to='/'>Zaloguj się</Link>
							</li>
						)}
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
				<div className='navbarMobile__options animation-top-down'>
					<ul className='navbarMobile__options-ul'>
						<li>
							<Link to='/'>Atlas ćwiczeń</Link>
						</li>
						<li>
							<Link to='/'>Plany treningowe</Link>
						</li>
						<li>
							<Link to='/'>Ciekawostki</Link>
						</li>
						<li>
							<Link to='/'>Zaloguj się</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
	return content;
};

export default Navbar;
