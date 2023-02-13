export interface User {
	username: string;
	email: string;
	password: string;
}
export interface LoginUser {
	password: string;
	username?: string;
	email?: string;
}
