// Homework lesson 3 task 1
console.log('Homework lesson 3 task 1')
// заполняем массив целыми числами от 2 до 100
var arr = [];

for (var i = 2; i < 100; i++) {
    arr[i] = true;
}

// объявляем переменную с первым простым числом
var p = 2;

do {
    // обозначаем составные числа - false
    for (i = 2 * p; i < 100; i += p) {
        arr[i] = false;
    }

    for (i = p + 1; i < 100; i++) {
        if (arr[i]) break;
    }

    p = i;
} while (p * p < 100);

var j = 0;

// выводим простые числа
while (j < arr.length) {
    j++;

    if (arr[j] === true) {
        console.log(j);
    }
}


// 2. С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
// стоимости корзины в зависимости от находящихся в ней товаров.

console.log('\nHomework lesson 3 task 2\n')

var cart = [
    {name: 'Майка', price: 700},
    {name: 'Кросовки', price: 3500},
    {name: 'Бесболка', price: 500},
    {name: 'Рюкзак', price: 1500}
]

// добавляем продукт в корзину

var item = {name: 'Трусы', price: 700}
var item1 = {name: 'Носки', price: 500}

function addToCart(item) {

    if (cart.includes(item)) {
        console.log('Товар есть в корзине');
        return cart;
    }
    else {
        cart.push(item);
        console.log(item.name + ' добавлена в корзину');
        return cart;
    }

}

console.log(addToCart(item))
console.log(addToCart(item1))

function removeFromCart(item) {

    if (cart.includes(item)) {
        cart.pop(item);
        console.log(item.name, 'удалены из корзины')
        return cart;
    }
    else {
        console.log('Товара нет в корзине');
        return cart;
    }

}

console.log(removeFromCart(item))

function countBasketPrice(cart){
    var sum = 0;
    for ( i = 0; i < cart.length; i++) {
        sum +=cart[i].price;
    }
    var total = 'Общая стоимость корзины: ' + sum + ' руб.';
    return total;

}

console.log(countBasketPrice(cart))


console.log('Homework lesson 3 task 3')

for (var i = 0; i < 10; console.log(i++)) { }

console.log('Homework lesson 3 task 4')

var x = '';

for (i = 0; i < 20; i++) {
    x += 'x';

    console.log(x);
}