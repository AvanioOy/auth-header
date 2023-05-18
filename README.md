# @avanio/auth-header

Typescript/Javascript http auth header class and parser.

## Package includes:

- Type: [AuthHeaderLikeString](./src/types/AuthHeaderLikeString.ts) - type and type guard for string that this might look like http auth header
- Type: [AuthHeaderString](./src/types//AuthHeaderString.ts) - type and type guard for string that is http auth header
- Type: [AuthHeaderObject](./src/types/AuthHeaderObject.ts) - type and type guard for object that have auth type and credentials
- Type: [AuthHeaderType](./src/types/AuthHeaderType.ts) - type and type guard for string that is http auth header type
- Type: [AuthHeaderCredentials](./src/types/AuthHeaderCredentials.ts) - type and guard for string that is http auth header credentials
- Class: [AuthHeader](./src/AuthHeader.ts) - class that represents http auth header and implements [AuthHeaderObject](./src/types/AuthHeaderObject.ts)
- Class: [AuthHeaderError](./src/AuthHeaderError.ts) - class that represents http auth header errors
- Function: [getAuthString](./src/authUtils.ts) - function that returns normalized auth header string
- Function: [getAuthType](./src/authUtils.ts) - function that returns normalized auth header type
- Function: [getAuthCredentials](./src/authUtils.ts) - function that returns auth header credentials
- Function: [getAuthObject](./src/authUtils.ts) - function that returns [AuthHeaderObject](./src/types/AuthHeaderObject.ts)

## examples

Handle both raw jwt token string and http bearer jwt token string  

```typescript
import {AuthHeader, isAuthHeaderLikeString} from '@avanio/auth-header';

function handleBearerToken(rawTokenOrAuthBearer: string): void {
	const currentToken: string | AuthHeader = isAuthHeaderLikeString(rawTokenOrAuthBearer) ? AuthHeader.fromString(rawTokenOrAuthBearer) : rawTokenOrAuthBearer;
	// if this is AuthHeader we are only interested Bearer tokens
	if (currentToken instanceof AuthHeader && currentToken.type !== 'BEARER') {
		throw new Error('token header: wrong authentication header type');
	}

	const token: string = currentToken instanceof AuthHeader ? currentToken.credentials : currentToken;
	// do validate token
}
```
