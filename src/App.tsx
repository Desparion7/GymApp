import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import SignIn from './auth/SignIn';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RequireAuth from './auth/RequireAuth';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public routes */}
				<Route index element={<Login />} />
				<Route path='signin' element={<SignIn />} />
				{/* Public routes */}
				{/* Routes after login */}
				<Route element={<RequireAuth />}>
					{/* Users routes after login */}
					<Route path='profile' element={<Profile />} />
					<Route />
					<Route />
					{/* Users routes after login */}
					{/* Admin routes */}
					<Route />
					<Route />
					<Route />
					{/* Admin routes */}
				</Route>
				{/* Routes after login */}
			</Route>
		</Routes>
	);
}

export default App;
