import { apiSlice } from '../api/apiSlice';
import { trainingSetType } from '../../models/trainingType';

const trainingSetApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllSets: builder.query<trainingSetType[], void>({
			query: () => ({
				url: `/set`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Sets', id: 'LIST' }],
		}),
		deleteSet: builder.mutation<void, { id: string }>({
			query: ({ id }) => ({
				url: `/set/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Sets', id: 'LIST' }],
		}),
	}),
});

export const { useGetAllSetsQuery, useDeleteSetMutation } = trainingSetApiSlice;
