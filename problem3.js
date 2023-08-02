var sum = 0;
function make_avg(){
    var integerNumbers = [54, 28, 54];
    for(var i = 0; i < integerNumbers.length; i++){
       var integerNumber = integerNumbers[i];
       sum += integerNumber;
    }
    var average = sum / integerNumbers.length;
    return average;
}
var finalResult = make_avg();
console.log(finalResult.toFixed(2));