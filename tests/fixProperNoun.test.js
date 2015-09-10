'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js')

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	

	it('should return true if the input is "fixProperNoun" ', function() {
		expect(functions.fixProperNoun('Washington')
	});
	
	


	it('should return false if the input is ('wASHINGTON')', function() {
		expect(functions.fixProperNoun('wASHINGTON'').to.be.throw('invalid input');

	});
	
	
	it( 'should throw an exception if the input is ({})', function( ){
		expect(function ( ) { functions.fixProperNoun("{}") }).to.throw('Invalid input');

	}

);