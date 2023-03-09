import { apiSlice } from '../api/apiSlice';
import type {
	User,
	updateUserType,
	updatePasswordType,
} from '../../models/userType';
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
		}),
		resetPassword: builder.mutation<ResponseType, { email: string }>({
			query: ({ email }) => ({
				url: '/users/reset',
				method: 'POST',
				body: { email },
			}),
		}),
		createNewPassword: builder.mutation<ResponseType, updatePasswordType>({
			query: ({ password, token }) => ({
				url: '/users/reset',
				method: 'PATCH',
				body: {
					password,
					token,
				},
			}),
		}),
	}),
});

export const {
	useAddNewUserMutation,
	useUpdateUserMutation,
	useResetPasswordMutation,
	useCreateNewPasswordMutation
} = usersApiSlice;
