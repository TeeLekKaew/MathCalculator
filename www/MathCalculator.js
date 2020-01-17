var exec = require('cordova/exec');
var MathCalculator = function() {
    console.log('MathCalculator instanced');
};

MathCalculator.prototype.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

MathCalculator.prototype.add = function (arg0,success, error)
{
    exec(success , error, 'MathCalculator' , 'add' , [arg0]);
}

MathCalculator.prototype.substract = function (arg0,success, error)
{
    exec(success , error, 'MathCalculator' , 'substract' , [arg0]);
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = MathCalculator;
}
