import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import SignIn from './auth/SignIn';
import Layout from './components/Layout';
import RequireAuth from './auth/RequireAuth';
import RefreshLogin from './auth/RefreshLogin';
import ProfileScreen from './components/screens/ProfileScreen';
import StartTrainingScreen from './components/screens/StartTrainingScreen';
import TrainingScreen from './components/screens/TrainingScreen';
import ExamplesTraining from './components/screens/ExamplesTraining';
import TrainingStoryScreen from './components/screens/TrainingStoryScreen';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public routes */}
				<Route index element={<Login />} />
				<Route path='signin' element={<SignIn />} />
				{/* Public routes */}
				{/* Routes after login */}
				<Route element={<RefreshLogin />}>
					<Route element={<RequireAuth />}>
						{/* Users routes after login */}
						<Route path='profile' element={<ProfileScreen />} />
						<Route path='profile/training' element={<StartTrainingScreen />} />
						<Route
							path='profile/training/examples'
							element={<ExamplesTraining />}
						/>
						<Route path='profile/history' element={<TrainingStoryScreen />} />
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
			</Route>
		</Routes>
	);
}

export default App;
// dodaC komunika gdy inny użytkownik próbuje wczytać nie swój plan treningowy
