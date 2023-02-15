import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';

const RequireAuth = () => {
	const location = useLocation();
	const { username } = useAuthToken();
	return (
		<>
			{true ? (
				<Outlet />
			) : (
				<Navigate
					to='/'
					state={{ from: location }}
					replace
				/>
			)}
		</>
	);
};
export default RequireAuth
