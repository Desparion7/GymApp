import { useSelector } from 'react-redux';
import { currentToken } from '../app/api/authSlice';
import jwtDecode from 'jwt-decode';
import { TokenType } from '../models/respondType';

const useAuthToken = () => {
	const token = useSelector(currentToken);
	// const token = useSelector((state: any) => state.auth.token);
	let isAdmin = false;

	if (token) {
		const decoded = jwtDecode(token) as TokenType;

		const { username, isAdmin, email } = decoded.UserInfo;

		return { username, isAdmin, email };
	}
	return { username: '', email: '', isAdmin };
};

export default useAuthToken;
