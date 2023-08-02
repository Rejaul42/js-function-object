var shoppingCart = {
    pen : 10,
    mouse : 5,
    keyboard : 3,
    sunglass : 2,
    watch : 2 
}

// get property value using three method
var mouseCount = shoppingCart.mouse;
var mouseCount2 = shoppingCart['mouse']
var mouseCount3 = 'mouse';
var mouseCount1 = shoppingCart[mouseCount3];
// console.log(mouseCount1);

// get object property names
var properties = Object.keys(shoppingCart);
console.log(properties);

// get object properties values

var values = Object.values(shoppingCart);
console.log(values);

// set object properties value

// number way
shoppingCart.pen = 15;
console.log(shoppingCart);

// 2 number way
shoppingCart['pen'] = 20;
console.log(shoppingCart);

// 3 number way

var penCount = 'pen';
shoppingCart[penCount] = 30;
console.log(shoppingCart)