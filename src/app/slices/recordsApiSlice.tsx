import { apiSlice } from '../api/apiSlice';

export interface singleRecordType {
	_id: string;
	recordName: string;
	recordAmount: string;
}

export interface recordsType {
	user: string;
	records: singleRecordType[];
}

const recordsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllRecords: builder.query<recordsType, void>({
			query: () => ({
				url: `/records`,
				method: 'GET',
			}),
			providesTags: [{ type: 'Records', id: 'LIST' }],
		}),
	}),
});

export const { useGetAllRecordsQuery } = recordsApiSlice;
