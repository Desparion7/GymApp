import { apiSlice } from '../api/apiSlice';
import { trainingType } from '../../models/trainingType';

const exampleTrainingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getExampleTraining: builder.query<trainingType, { path: string }>({
			query: ({ path }) => ({
				url: `/exampletraining/${path}`,
				method: 'GET',
			}),
		}), 
	}),
});

export const { useGetExampleTrainingQuery } = exampleTrainingApiSlice;
