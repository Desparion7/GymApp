import './navbar.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuthToken from '../../hooks/useAuthToken';
import { useSendLogoutMutation } from '../../app/slices/authApiSlice';

const Navbar = () => {
	const [menu, setMenu] = useState<boolean>(false);
	const { username, isAdmin } = useAuthToken() as {
		username: string;
		isAdmin: boolean;
	};
	const menuRef = useRef<HTMLDivElement>(null);
	const menuBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		let handler = (e: any) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				if (menuBtnRef.current && !menuBtnRef.current.contains(e.target))
					setMenu(false);
			}
		};
		let handleScroll = () => {
			setMenu(false);
		};
		document.addEventListener('mousedown', handler);
		window.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	const [sendLogout] = useSendLogoutMutation();

	const content = (
		<nav className='nav'>
			<div className='navbar'>
				<Link to='/'>
					<h1>Menadżer Treningu</h1>
				</Link>

				<div className='navbar__options'>
					<ul className='navbar__options-ul'>
						<li>
							<Link to='/atlas'>Atlas ćwiczeń</Link>
						</li>
						<li>
							<Link to='/planytreningowe'>Plany treningowe</Link>
						</li>
						{username && (
							<li>
								<Link to='/profile'>Mój profil</Link>
							</li>
						)}
						{username ? (
							<li>
								<Link to='/info' onClick={sendLogout}>
									Wyloguj się
								</Link>
							</li>
						) : (
							<li>
								<Link to='/login'>Zaloguj się</Link>
							</li>
						)}
					</ul>
				</div>
				<button
					className='navbarMobile__containter'
					onClick={() => setMenu(!menu)}
					ref={menuBtnRef}
				>
					<div className='navbarMobile__containter-menuButton'></div>
				</button>
			</div>
			{menu && (
				<div className='navbarMobile__options animation-top-down' ref={menuRef}>
					<ul className='navbarMobile__options-ul'>
						<li onClick={() => setMenu(false)}>
							<Link to='/atlas'>Atlas ćwiczeń</Link>
						</li>
						<li onClick={() => setMenu(false)}>
							<Link to='/planytreningowe'>Plany treningowe</Link>
						</li>
						{username && (
							<li onClick={() => setMenu(false)}>
								<Link to='/profile'>Mój profil</Link>
							</li>
						)}
						{username ? (
							<li onClick={() => setMenu(false)}>
								<Link to='/info' onClick={sendLogout}>
									Wyloguj się
								</Link>
							</li>
						) : (
							<li onClick={() => setMenu(false)}>
								<Link to='/login'>Zaloguj się</Link>
							</li>
						)}
					</ul>
				</div>
			)}
		</nav>
	);
	return content;
};

export default Navbar;
