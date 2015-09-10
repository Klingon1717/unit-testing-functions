use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should return true if the input is "abc" ', function() {
		expect(functions.sortLetters("abc")).to.be.true;

	});
	it('should return false if the input is "abcd" ', function() {
		expect(functions.sortLetters("abcd")).to.be.false;
	});
	it( 'should throw an exception if the input is an array', function( ){
		expect(function ( ) { functions.sortLetters(['a']) }).to.throw('Invalid input');

	})

});