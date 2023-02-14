import { apiSlice } from '../api/apiSlice';
import { LoginUser } from '../../models/userType';
import { logOut } from '../api/authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<{ accessToken: string }, LoginUser>({
			query: (credential) => ({
				url: '/auth',
				method: 'POST',
				body: { ...credential },
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
					setTimeout(() => {
						dispatch(apiSlice.util.resetApiState());
					}, 1000);
				} catch (err) {
					console.log(err);
				}
			},
		}),
		refresh: builder.mutation({
			query: () => ({
				url: '/auth/refresh',
				method: 'GET',
			}),
		}),
	}),
});

export const { useLoginMutation, useSendLogoutMutation } = authApiSlice;

export const currentToken = (state: any) => state.auth.token;
