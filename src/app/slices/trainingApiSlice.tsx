import { apiSlice } from '../api/apiSlice';
import {
	trainingType,
	trainingTypeWithID,
	TabelElementType,
} from '../../models/trainingType';

const trainingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createNewTraining: builder.mutation<any, TabelElementType[][]>({
			query: (emptyTraining) => ({
				url: '/training',
				method: 'POST',
				body: {
					emptyTraining,
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
		updateTraining: builder.mutation<trainingType, trainingTypeWithID>({
			query: ({ id, exercise }) => ({
				url: `/training/${id}`,
				method: 'PATCH',
				body: { exercise },
			}),
			invalidatesTags: [{ type: 'Training', id: 'LIST' }],
		}),
	}),
});

export const {
	useCreateNewTrainingMutation,
	useGetTrainingByIdMutation,
	useUpdateTrainingMutation,
} = trainingApiSlice;
