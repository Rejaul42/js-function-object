function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var totalSingara = bringSingara(myTaka);
console.log(totalSingara);