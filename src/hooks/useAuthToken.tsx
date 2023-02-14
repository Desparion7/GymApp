import { useSelector } from 'react-redux';
import { currentToken } from '../app/slices/authApiSlice';
import jwtDecode from 'jwt-decode';
import { TokenType } from '../models/respondType';

const useAuthToken = () => {
	const token = useSelector(currentToken);
	let isAdmin = false;

	if (token) {
		const decoded = jwtDecode(token) as TokenType;

		const { username, isAdmin } = decoded.UserInfo;

		return { username, isAdmin };
	}
	return { username: '', isAdmin };
};

export default useAuthToken;
