import { apiSlice } from '../api/apiSlice';
import {
	trainingType,
	trainingTypeWithID,
	trainingEmptyType,
} from '../../models/trainingType';

interface TrainingsAndPageType {
	trainings: trainingType[];
	page: number;
	pages: number;
}

const trainingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTrainingById: builder.query<trainingType, { id: string }>({
			query: ({ id }) => ({
				url: `/training/${id}`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Training', id: 'LIST' }],
		}),
		getUserAllTrainings: builder.query<
			TrainingsAndPageType,
			string | undefined
		>({
			query: (pageParams) => ({
				url: `/training?_page=${pageParams}`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Trainings', id: 'LIST' }],
		}),
		createNewTraining: builder.mutation<any, trainingEmptyType>({
			query: ({ exercise, trainingDate, trainingName }) => ({
				url: '/training',
				method: 'POST',
				body: {
					exercise,
					trainingDate,
					trainingName,
				},
			}),
			invalidatesTags: [{ type: 'Trainings', id: 'LIST' }],
		}),
		updateTraining: builder.mutation<trainingType, trainingTypeWithID>({
			query: ({ id, exercise }) => ({
				url: `/training/${id}`,
				method: 'PATCH',
				body: { exercise },
			}),
			invalidatesTags: [{ type: 'Training', id: 'LIST' }],
		}),
		updateTrainingData: builder.mutation<trainingType, trainingTypeWithID>({
			query: ({ id, trainingDate }) => ({
				url: `/training/${id}`,
				method: 'PATCH',
				body: { trainingDate },
			}),
			invalidatesTags: [
				{ type: 'Training', id: 'LIST' },
				{ type: 'Trainings', id: 'LIST' },
			],
		}),
		updateTrainingTime: builder.mutation<trainingType, trainingTypeWithID>({
			query: ({ id, timeStart, timeEnd }) => ({
				url: `/training/${id}`,
				method: 'PATCH',
				body: { timeStart, timeEnd },
			}),
			invalidatesTags: [
				{ type: 'Training', id: 'LIST' },
				{ type: 'Trainings', id: 'LIST' },
			],
		}),
		updateTrainingName: builder.mutation<trainingType, trainingTypeWithID>({
			query: ({ id, trainingName }) => ({
				url: `/training/${id}`,
				method: 'PATCH',
				body: { trainingName },
			}),
			invalidatesTags: [
				{ type: 'Training', id: 'LIST' },
				{ type: 'Trainings', id: 'LIST' },
			],
		}),
		removeTrainingById: builder.mutation<void, { id: string }>({
			query: ({ id }) => ({
				url: `/training/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Trainings', id: 'LIST' }],
		}),
	}),
});

export const {
	useGetTrainingByIdQuery,
	useGetUserAllTrainingsQuery,
	// useGetUserAllTrainings2Mutation,
	useCreateNewTrainingMutation,
	useUpdateTrainingMutation,
	useUpdateTrainingDataMutation,
	useUpdateTrainingNameMutation,
	useUpdateTrainingTimeMutation,
	useRemoveTrainingByIdMutation,
} = trainingApiSlice;
