import { apiSlice } from '../api/apiSlice';
import { trainingType } from '../../models/trainingType';

const trainingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createNewTraining: builder.mutation<any, trainingType>({
			query: (initialTrainingData) => ({
				url: '/training',
				method: 'POST',
				body: {
					initialTrainingData,
				},
			}),
			invalidatesTags: [{ type: 'Training', id: 'LIST' }],
		}),
		getTrainingById: builder.mutation<trainingType, { id: string }>({
			query: ({ id }) => ({
				url: `/training/${id}`,
				method: 'GET',
			}),
			invalidatesTags: [{ type: 'Training', id: 'LIST' }],
		}),
	}),
});

export const { useCreateNewTrainingMutation, useGetTrainingByIdMutation } =
	trainingApiSlice;
