import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useRefreshMutation } from '../app/slices/authApiSlice';
import { useSelector } from 'react-redux';
import { currentToken } from '../app/api/authSlice';
import LoadingSpinner from '../UI/LoadingSpinner';

const RefreshLogin = () => {
	const token = useSelector(currentToken);
	const effectRan = useRef(false);
	const [trueSuccess, setTrueSuccess] = useState(false);

	const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
		useRefreshMutation();


	useEffect(() => {
		if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
			const verifyRefreshToken = async () => {
				console.log('verifying refresh token');
				try {
					await refresh();
					setTrueSuccess(true);
				} catch (err) {
					console.error(err);
				}
			};
			if (!token) verifyRefreshToken();
		}
		return () => {
			effectRan.current = true;
		};
		// eslint-disable-next-line
	}, []);

	let content ;

	if (isLoading) {
		content = <LoadingSpinner />;
	} else if (isError) {
		<Link to='/'>Musisz się zalogować</Link>;
	} else if (isSuccess && trueSuccess) {
		console.log('success');
		content = <Outlet />;
	} else if (token && isUninitialized) {
		console.log('token and uninit');
		content = <Outlet />;
	}

	return content;
};

export default RefreshLogin;
