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
export interface TokenType {
	UserInfo: {
		username: string;
		isAdmin: boolean;
	};
}
