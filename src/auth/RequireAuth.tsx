import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';

const RequireAuth = () => {
	const location = useLocation();
	const { username } = useAuthToken();

	const content =
		username || username === '' ? (
			<Outlet />
		) : (
			<Navigate to='/' state={{ from: location }} replace />
		);

	return content;
};
export default RequireAuth;
