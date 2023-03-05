import { apiSlice } from '../api/apiSlice';

export interface singleRecordType {
	_id: string;
	recordName: string;
	recordAmount: string;
}
export interface newRecordType {
	recordName: string;
	recordAmount: string;
}

export interface recordsType {
	user: string;
	records: singleRecordType[];
}
interface updateRecordType {
	id: string;
	recordValue: string;
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
		newRecord: builder.mutation<recordsType, newRecordType>({
			query: ({ recordName, recordAmount }) => ({
				url: `/records`,
				method: 'POST',
				body: { recordName, recordAmount },
			}),
			invalidatesTags: [{ type: 'Records', id: 'LIST' }],
		}),
		updateRecord: builder.mutation<recordsType, updateRecordType>({
			query: ({ id, recordValue }) => ({
				url: `/records/${id}`,
				method: 'PATCH',
				body: { recordValue },
			}),
			invalidatesTags: [{ type: 'Records', id: 'LIST' }],
		}),
		deleteRecord: builder.mutation<any, string>({
			query: (id) => ({
				url: `/records/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Records', id: 'LIST' }],
		}),
	}),
});

export const {
	useGetAllRecordsQuery,
	useNewRecordMutation,
	useUpdateRecordMutation,
	useDeleteRecordMutation,
} = recordsApiSlice;
