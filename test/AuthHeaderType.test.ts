/* eslint-disable no-unused-expressions */
/* eslint-disable sonarjs/no-duplicate-string */
import 'mocha';
import * as chai from 'chai';
import {assertAuthHeaderType, AuthHeaderError, haveAuthHeaderType} from '../src';

const expect = chai.expect;

describe('AuthHeaderObject', () => {
	describe('assertAuthHeaderType', () => {
		it('should validate header', async function () {
			expect(() => assertAuthHeaderType('BASIC')).not.to.throw();
		});
		it('should throw error', async function () {
			expect(() => assertAuthHeaderType('asd')).to.throw(AuthHeaderError, '"asd" is invalid auth header type');
			expect(() => assertAuthHeaderType(undefined as unknown as string)).to.throw(AuthHeaderError, 'undefined is invalid auth header type');
		});
	});
	describe('assertAuthHeaderType', () => {
		it('should validate header', async function () {
			expect(haveAuthHeaderType('BASIC')).to.be.true;
		});
		it('should throw error', async function () {
			expect(haveAuthHeaderType('asd')).to.be.false;
			expect(haveAuthHeaderType(undefined)).to.be.false;
		});
	});
});
