export class AuthHeaderError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'AuthHeaderError';
		Error.captureStackTrace(this, this.constructor);
	}
}
