var shoppingCart = {
    pen : 10,
    mouse : 5,
    keyboard : 3,
    sunglass : 5,
    watch : 2 
}
var keys = Object.keys(shoppingCart);
for(var i = 0; i < keys.length; i++){
    var items = keys[i];
    var itemValues = shoppingCart[items];
    // console.log(items, itemValues);
}
// for in loop
for(propertyName in shoppingCart){
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);

}