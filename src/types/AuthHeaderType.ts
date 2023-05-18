import {AuthHeaderError} from '../AuthHeaderError';

export const authHeaderTypes = ['BEARER', 'BASIC', 'DIGEST', 'HOBA', 'MUTUAL', 'NEGOTIATE', 'NTLM', 'VAPID', 'AWS4-HMAC-SHA256'] as const;
export type AuthHeaderType = (typeof authHeaderTypes)[number];

/**
 * AuthHeaderType type guard
 */
export function isAuthHeaderType(authHeaderType: unknown): authHeaderType is AuthHeaderType {
	if (typeof authHeaderType !== 'string') {
		return false;
	}
	return authHeaderTypes.some((t) => t === authHeaderType);
}

/**
 * Check if have auth header type (case insensitive)
 */
export function haveAuthHeaderType(authHeaderType: unknown): boolean {
	if (typeof authHeaderType !== 'string') {
		return false;
	}
	authHeaderType = authHeaderType.toUpperCase();
	return authHeaderTypes.some((t) => t === authHeaderType);
}

/**
 * AuthHeaderType assertion
 */
export function assertAuthHeaderType(value: unknown): asserts value is AuthHeaderType {
	if (!isAuthHeaderType(value)) {
		throw new AuthHeaderError(`${JSON.stringify(value)} is invalid auth header type`);
	}
}
