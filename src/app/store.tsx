import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authSlice from './api/authSlice';
import userInfoSlice from './api/userInfoSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSlice,
		userInfo: userInfoSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: false,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
