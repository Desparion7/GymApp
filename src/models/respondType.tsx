export interface Response {
	error?: {
		data?: {
			error: string;
		};
		status?: string;
	};
	data?: {
		message: string;
	};
}
