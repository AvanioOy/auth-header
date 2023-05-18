/* eslint-disable sonarjs/no-duplicate-string */
import 'mocha';
import * as chai from 'chai';
import {AuthHeaderError, authHeaderTypes, getAuthCredentials, getAuthString, getAuthType} from '../src';

const expect = chai.expect;

const nullString = null as unknown as string;

const workingAuth = authHeaderTypes.map((type) => `${type.toLowerCase()} RANDOMVALUE`);

describe('auth utils', () => {
	describe('getAuthString', () => {
		it('should return header string', async function () {
			workingAuth.forEach((auth) => {
				expect(getAuthString(auth)).to.be.eq(auth.toUpperCase());
			});
		});
		it('should throw error', async function () {
			expect(getAuthString.bind(undefined, 'NULL 123')).to.throw(AuthHeaderError, '"NULL" is invalid auth header type');
			expect(getAuthString.bind(undefined, nullString)).to.throw(AuthHeaderError, 'object is invalid auth header type');
			expect(getAuthString.bind(undefined, 'Basic')).to.throw(AuthHeaderError, '"Basic" is invalid auth header format, missing space separator');
			expect(getAuthString.bind(undefined, 'Basic ')).to.throw(AuthHeaderError, '"" not include valid credentials');
		});
	});
	describe('getAuthType', () => {
		it('should return header string', async function () {
			workingAuth.forEach((auth) => {
				expect(getAuthType(auth)).to.be.eq(auth.toUpperCase().split(' ')[0]);
			});
		});
	});
	describe('getAuthType', () => {
		it('should return header string', async function () {
			workingAuth.forEach((auth) => {
				expect(getAuthCredentials(auth)).to.be.eq(auth.toUpperCase().split(' ')[1]);
			});
		});
	});
});
