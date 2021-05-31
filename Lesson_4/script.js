console.log('\nHomework lesson 4 task 1\n')


function divider(digit)
{
    this.hundreds = Math.floor(digit/100);
    this.dozens = Math.floor((digit - this.hundreds*100)/10);
    this.units = Math.floor(digit - this.hundreds*100 - this.dozens*10);
    
}

console.log(new divider(495))


console.log('\nHomework lesson 4 task 2\n')


var cart = [
    {name: 'Майка', size: 'M', price: 700},
    {name: 'Кросовки', size: '45', price: 3500},
    {name: 'Бесболка',size: 'M', price: 500},
    {name: 'Рюкзак',size: 'M', price: 1500},
]

// добавляем продукт в корзину

var item = {name: 'Трусы',size: 'M', price: 700}
var item1 = {name: 'Носки',size: 'M', price: 500}

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

console.log('\nHomework lesson 4 task 3\n')

function Product (name, size, price){
    this.name = name;
    this.size = size;
    this.age = price;
}

console.log(new Product('Test', 'M', 700 ))
