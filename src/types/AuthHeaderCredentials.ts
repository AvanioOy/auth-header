import {AuthHeaderError} from '../AuthHeaderError';

export type AuthHeaderCredentials = string & {__authHeaderCredentials: true};

export function isAuthHeaderCredentials(data: unknown): data is AuthHeaderCredentials {
	return typeof data === 'string' && data.length > 0;
}

export function assertAuthHeaderCredentials(value: unknown): asserts value is AuthHeaderCredentials {
	if (!isAuthHeaderCredentials(value)) {
		throw new AuthHeaderError(`${JSON.stringify(value)} not include valid credentials`);
	}
}
