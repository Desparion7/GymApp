import { apiSlice } from '../api/apiSlice';
import { LoginUser } from '../../models/userType';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<{ accessToken: string }, LoginUser>({
			query: (credential) => ({
				url: '/auth',
				method: 'POST',
				body: { ...credential },
			}),
		}),
	}),
});

export const { useLoginMutation } = authApiSlice;

export const currentToken = (state: any) => state.auth.token;
