import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import SignIn from './auth/SignIn';
import Layout from './components/Layout';
import RequireAuth from './auth/RequireAuth';
import ProfileScreen from './components/screens/ProfileScreen';
import TrainingScreen from './components/screens/TrainingScreen';
import StartTrainingScreen from './components/screens/StartTrainingScreen';
import ExamplesTraining from './components/screens/ExamplesTraining';

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
					<Route path='profile' element={<ProfileScreen />} />
					<Route path='profile/training' element={<StartTrainingScreen />} />
					<Route
						path='profile/training/examples'
						element={<ExamplesTraining />}
					/>
					<Route path='profile/training/:id' element={<TrainingScreen />} />
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
