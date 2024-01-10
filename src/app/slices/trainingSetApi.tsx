import { apiSlice } from '../api/apiSlice';
import {
	trainingSetType,
	trainingEmptySetType,
} from '../../models/trainingType';
import { trainingSetTypeWithID } from '../../models/trainingType';

const trainingSetApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllSets: builder.query<trainingSetType[], void>({
			query: () => ({
				url: `/set`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Sets', id: 'LIST' }],
		}),
		getTrainingSetById: builder.query<trainingSetType, { id: string }>({
			query: ({ id }) => ({
				url: `/set/${id}`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Set', id: 'LIST' }],
		}),
		createNewSet: builder.mutation<trainingSetType, trainingEmptySetType>({
			query: ({ trainingName, exercise }) => ({
				url: '/set',
				method: 'POST',
				body: { trainingName, exercise },
			}),
			invalidatesTags: [{ type: 'Sets', id: 'LIST' }],
		}),
		updateTrainingSet: builder.mutation<
			trainingSetType,
			trainingSetTypeWithID
		>({
			query: ({ id, exercise }) => ({
				url: `/set/${id}`,
				method: 'PATCH',
				body: { exercise },
			}),
			async onQueryStarted(
				{ id, ...patch },
				{ dispatch, queryFulfilled }
			) {
				const patchResult = dispatch(
					trainingSetApiSlice.util.updateQueryData("getTrainingSetById", {id}, (draft) => {
						Object.assign(draft, patch);
					})
				);
				try {
					await queryFulfilled;
				} catch {
					patchResult.undo();
				}
			},
			invalidatesTags: [{ type: 'Set', id: 'LIST' }],
		}),
		updateTrainingSetName: builder.mutation<
			trainingSetType,
			trainingSetTypeWithID
		>({
			query: ({ id, trainingName }) => ({
				url: `/set/${id}`,
				method: 'PATCH',
				body: { trainingName },
			}),
			invalidatesTags: [
				{ type: 'Set', id: 'LIST' },
				{ type: 'Sets', id: 'LIST' },
			],
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

export const {
	useGetAllSetsQuery,
	useGetTrainingSetByIdQuery,
	useCreateNewSetMutation,
	useUpdateTrainingSetMutation,
	useUpdateTrainingSetNameMutation,
	useDeleteSetMutation,
} = trainingSetApiSlice;
