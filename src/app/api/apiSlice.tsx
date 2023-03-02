import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

// https://calm-jade-sturgeon-boot.cyclic.app/
// http://localhost:3000

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://calm-jade-sturgeon-boot.cyclic.app/',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;

		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export const apiSlice = createApi({
	reducerPath: 'api', // optional
	baseQuery: baseQuery,
	tagTypes: ['Users', 'Training', 'Trainings', 'Sets', 'Set'],
	endpoints: (builder) => ({}),
});
