import { apiSlice } from '../api/apiSlice';
import type { User, updateUserType } from '../../models/userType';
import { Response, ResponseType } from '../../models/respondType';

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
		updateUser: builder.mutation<ResponseType, updateUserType>({
			query: ({ password, newPassword, newEmail }) => ({
				url: '/users',
				method: 'PATCH',
				body: {
					password,
					newPassword,
					newEmail,
				},
			}),
			invalidatesTags: [{ type: 'Users', id: 'LIST' }],
		}),
	}),
});

export const { useAddNewUserMutation, useUpdateUserMutation } = usersApiSlice;
