export interface Response {
	error?: {
		data: {
			error: string;
		};
	};
	data?: {
		message: string;
	};
}
