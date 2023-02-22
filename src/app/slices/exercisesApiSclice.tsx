import { apiSlice } from '../api/apiSlice';
import { ExerciseType } from '../../models/exerciseType';

const exerciseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getExerciseByUrl: builder.query<ExerciseType, { url: string }>({
			query: ({ url }) => ({
				url: `/exercise/${url}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetExerciseByUrlQuery } = exerciseApiSlice;
