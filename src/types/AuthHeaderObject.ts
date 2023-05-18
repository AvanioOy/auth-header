import {AuthHeaderCredentials, isAuthHeaderCredentials} from './AuthHeaderCredentials';
import {AuthHeaderType, isAuthHeaderType} from './AuthHeaderType';
import {AuthHeaderError} from '../AuthHeaderError';

export type AuthHeaderObject = {
	type: AuthHeaderType;
	credentials: AuthHeaderCredentials;
};

/**
 * Auth header type guard
 */
export function isAuthHeaderObject(data: unknown): data is AuthHeaderObject {
	return (
		typeof data === 'object' &&
		data !== null &&
		'type' in data &&
		isAuthHeaderType(data.type) &&
		'credentials' in data &&
		isAuthHeaderCredentials(data.credentials)
	);
}

export function assertAuthHeaderObject(value: unknown): asserts value is AuthHeaderObject {
	if (!isAuthHeaderObject(value)) {
		throw new AuthHeaderError(`${JSON.stringify(value)} is invalid auth header object`);
	}
}
