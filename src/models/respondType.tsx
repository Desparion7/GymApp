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

export interface ResponseType {
	message?: string;
	error?: string;
}
export interface TokenType {
	UserInfo: {
		username: string;
		isAdmin: boolean;
		email: string;
	};
}
