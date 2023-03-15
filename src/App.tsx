import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import InfoScreen from './auth/InfoScreen';
import Layout from './components/UI/Layout';
import RequireAuth from './auth/RequireAuth';
import RefreshLogin from './auth/RefreshLogin';
import ProfileScreen from './components/screens/ProfileScreen';
import StartTrainingScreen from './components/screens/StartTrainingScreen';
import TrainingScreen from './components/screens/TrainingScreen';
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
import CategoryScreen from './components/exerciesCategory/CategoryScreen';
import ExerciseScreen from './components/screens/ExerciseScreen';
import TrainingPlansScreen from './components/screens/TrainingPlansScreen';
import SinglePlanScreen from './components/screens/SinglePlanScreen';
import MyPlansScreen from './components/screens/MyPlansScreen';
import MyPlanScreen from './components/screens/MyPlanScreen';
import MyPlanScreenEdit from './components/screens/MyPlanScreenEdit';
import MyRecordsScreen from './components/screens/MyRecordsScreen';
import AccountOptionsScreen from './components/screens/AccountOptionsScreen';
import ResetPasswordScreen from './auth/ResetPasswordScreen';
import CreateNewPassword from './auth/CreateNewPassword';
import MainPage from './components/screens/MainPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{/* Public routes */}
				<Route index element={<MainPage />} />
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='reset' element={<ResetPasswordScreen />} />
				<Route path='resetpassword' element={<CreateNewPassword />} />
				<Route path='info' element={<InfoScreen />} />
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
					<Route path='atlas/moje-ćwiczenia' element={<CategoryScreen />} />
					<Route path='planytreningowe' element={<TrainingPlansScreen />} />
					<Route path='planytreningowe/:path' element={<SinglePlanScreen />} />
					{/* Public routes */}
					{/* Routes after login */}

					<Route element={<RequireAuth />}>
						{/* Users routes after login */}
						<Route path='profile' element={<ProfileScreen />} />
						<Route path='profile/trening' element={<StartTrainingScreen />} />

						<Route path='profile/history' element={<TrainingStoryScreen />} />
						<Route
							path='profile/history/:pageNumber'
							element={<TrainingStoryScreen />}
						/>
						<Route path='profile/trening/:id' element={<TrainingScreen />} />
						<Route
							path='profile/moje-plany-treningowe'
							element={<MyPlansScreen />}
						/>
						<Route />
						<Route
							path='profile/moje-plany-treningowe/:id'
							element={<MyPlanScreen />}
						/>
						<Route />
						<Route
							path='profile/moje-plany-treningowe/:id-edit'
							element={<MyPlanScreenEdit />}
						/>
						<Route path='profile/moje-rekordy' element={<MyRecordsScreen />} />
						<Route path='profile/options' element={<AccountOptionsScreen />} />
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
