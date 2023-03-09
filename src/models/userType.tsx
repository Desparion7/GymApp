export interface User {
	username: string;
	email: string;
	password: string;
}
export interface LoginUser {
	password?: string;
	username?: string;
	email?: string;
	credential?: string;
}

export interface updateUserType {
	password: string;
	newPassword?: string;
	newEmail?: string;
}
export interface updatePasswordType {
	password: string;
	token: string;
}
