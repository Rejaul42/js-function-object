// no return value
// function even_odd(number){
//     if(number % 2 === 0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }
// }
// even_odd(5);

// has return

function even_odd(number){
    if(number % 2 === 0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
var finalResult = even_odd(5);
console.log(finalResult);