
var lib = {};

lib.sumArray = function (array, callback){
    array = (array instanceof Array) ? array : false;
    if (!array){
        var err = new Error('The value received by sumArray is not an Array.');
        callback(err);
    };

    var sum = 0;
    for(var item in array){
        sum+=array[item]
    };

    return sum;
}

lib.square = function (mynum, callback){
    mynum = typeof(mynum) == 'number' ? mynum : false;
    if (!mynum){
        var err = new Error('The value received by square is not a number.');
        callback(err);
    };

    return mynum*mynum;
}

module.exports = lib;