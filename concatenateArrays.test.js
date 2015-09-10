'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js')

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	

	it('should return true if the input is "concatenateArrays" ', function() {
		expect(functions.concatenateArrays([1,2,3,4], [5,6,7])).to.eql([1,2,3,4,5,6,7]);
	});
	
	


	it('should return false if the input is ([2]))', function() {
		expect(functions.checkData([2])).to.be.throw('invalid input');

	});
	
	
	it( 'should throw an exception if the input is ({})', function( ){
		expect(function ( ) { functions.checkData("{}") }).to.throw('Invalid input');

	}

);