import { apiSlice } from '../api/apiSlice';
import type { User } from '../../models/userType';
import { Response } from '../../models/respondType';

const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addNewUser: builder.mutation<Response, User>({
			query: (initialUserData) => ({
				url: '/users',
				method: 'POST',
				body: {
					...initialUserData,
				},
			}),
			invalidatesTags: [{ type: 'Users', id: 'LIST' }],
		}),
	}),
});

export const { useAddNewUserMutation } = usersApiSlice;
