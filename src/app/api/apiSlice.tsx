import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { setCredentials } from './authSlice';
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

// https://calm-jade-sturgeon-boot.cyclic.app
// http://localhost:3000

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://gym-app-backend-q0t5.onrender.com',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;

		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	// console.log(args); // request url, method, body
	// console.log(api); // signal, dispatch, getState()
	// console.log(extraOptions); //custom like {shout: true}

	let result = await baseQuery(args, api, extraOptions);

	// If you want, handle other status codes, too
	if (result?.error?.status === 401) {
		console.log('sending refresh token');

		// send refresh token to get new access token
		const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

		if (refreshResult?.data) {
			// store the new token
			api.dispatch(setCredentials({ ...refreshResult.data }));

			// retry original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			if (refreshResult?.error?.status === 403) {
				if (refreshResult.error.data) {
					(refreshResult.error.data as any).message =
						'login stracił ważność. ';
				}
			}
			return refreshResult;
		}
	}

	return result;
};

export const apiSlice = createApi({
	reducerPath: 'api', // optional
	baseQuery: baseQueryWithReauth,
	tagTypes: ['Users', 'Training', 'Trainings', 'Sets', 'Set', 'Records'],
	endpoints: (builder) => ({}),
});
