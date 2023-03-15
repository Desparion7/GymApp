import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';

const RequireAuth = () => {
	const location = useLocation();
	const { username } = useAuthToken();

	const content = username ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);

	return content;
};
export default RequireAuth;
