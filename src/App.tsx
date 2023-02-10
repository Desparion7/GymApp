import { Routes, Route } from 'react-router-dom';
import Public from './components/Public';
import { Login } from './features/auth/Login';
import Layout from './components/Layout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public routes */}
				<Route index element={<Public />} />
				<Route path='login' element={<Login />} />
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
