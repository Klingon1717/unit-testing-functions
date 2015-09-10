'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should return true if the input is "abc" ', function() {
		expect(functions.absVal("abc")).to.be.true;

	});
	it('should return false if the input is "abcd" ', function() {
		expect(functions.absVal("abcd")).to.be.false;
	});
	it( 'should throw an exception if the input is an array', function( ){
		expect(function ( ) { functions.absVal().to.throw('Invalid input');

	})

});