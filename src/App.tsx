import { Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import SignIn from './features/auth/SignIn';
import Layout from './components/Layout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public routes */}
				<Route index element={<Login />} />
				<Route path='signin' element={<SignIn />} />
				{/* Public routes */}
				{/* Users routes after login */}
				<Route />
				<Route />
				<Route />
				{/* Users routes after login */}
				{/* Admin routes */}
				<Route />
				<Route />
				<Route />
				{/* Admin routes */}
			</Route>
		</Routes>
	);
}

export default App;
