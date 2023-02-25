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
import AtlasScreen from './components/screens/AtlasScreen';
import ChestScreen from './components/exerciesCategory/ChestScreen';
import BackScreen from './components/exerciesCategory/BackScreen';
import LegsScreen from './components/exerciesCategory/LegsScreen';
import LegsAndButtScreen from './components/exerciesCategory/LegsAndButtScreen';
import ShouldersScreen from './components/exerciesCategory/ShouldersScreen';
import TricepsScreen from './components/exerciesCategory/TricepsScreen';
import BicepsScreen from './components/exerciesCategory/BicepsScreen';
import BellyScreen from './components/exerciesCategory/BellyScreen';
import CalvesScreen from './components/exerciesCategory/CalvesScreen';
import ExerciseScreen from './components/screens/ExerciseScreen';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public routes */}
				<Route index element={<Login />} />
				<Route path='signin' element={<SignIn />} />
				<Route element={<RefreshLogin />}>
					<Route path='atlas' element={<AtlasScreen />} />
					<Route path='atlas/:category/:url' element={<ExerciseScreen />} />
					<Route path='atlas/klatka-piersiowa' element={<ChestScreen />} />
					<Route path='atlas/plecy' element={<BackScreen />} />
					<Route path='atlas/czworoglowe-uda' element={<LegsScreen />} />
					<Route path='atlas/dwuglowe-uda' element={<LegsAndButtScreen />} />
					<Route path='atlas/brzuch' element={<BellyScreen />} />
					<Route path='atlas/biceps' element={<BicepsScreen />} />
					<Route path='atlas/triceps' element={<TricepsScreen />} />
					<Route path='atlas/barki' element={<ShouldersScreen />} />
					<Route path='atlas/łydki' element={<CalvesScreen />} />
					<Route path='atlas/moje-ćwiczenia' element={<BackScreen />} />
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
