import { apiSlice } from '../api/apiSlice';
import { LoginUser } from '../../models/userType';
import { logOut, setCredentials } from '../api/authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<{ accessToken: string }, LoginUser>({
			query: (data) => ({
				url: '/auth',
				method: 'POST',
				body: { ...data },
			}),
		}),
		sendLogout: builder.mutation({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					await queryFulfilled;
					dispatch(logOut());

					dispatch(apiSlice.util.resetApiState());
				} catch (err) {
					console.log(err);
				}
			},
		}),
		refresh: builder.mutation<{ accessToken: string }, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'GET',
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					// console.log(data);
					const { accessToken } = data;
					dispatch(setCredentials({ accessToken }));
				} catch (err) {
					console.log(err);
				}
			},
		}),
	}),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
	authApiSlice;
