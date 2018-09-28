//dependencies
var lib = require('./../app/lib.js');
var assert = require('assert');

//holder for tests
var tests = {};

tests['Square of 2 should be 4'] = function(done){
    var val = lib.square(2);
    assert.equal(val, 4);
    done();
};

tests['Square of 3 should be 9'] = function(done){
    var val = lib.square(3);
    assert.equal(val, 9);
    done();
};

tests['Square function should not throw an error. It should callback it when it receives a string'] = function(done){
    assert.doesNotThrow(function(){
        lib.square('a', function(err){
        assert.ok(err);
        done();
      })
    }, TypeError);
};

tests['Sum array [1, 1, 2, 3, 5] should be 12'] = function(done){
    var val = lib.sumArray([1, 1, 2, 3, 5]);
    assert.equal(val, 12);
    done();
};

tests['Sum array (string) should throw an error'] = function(done){
    assert.doesNotThrow(function(){
        lib.sumArray('mystring', function(err){
        assert.ok(err);
        done();
      })
    }, TypeError);
};

module.exports = tests;

