
var array = [
    {id: 1,name: 'Майка', size: 'M', price: 700, quantity: 0},
    {id: 2,name: 'Кросовки', size: '45', price: 3500, quantity: 0},
    {id: 3,name: 'Бесболка',size: 'M', price: 500, quantity: 0},
    {id: 4,name: 'Рюкзак',size: 'M', price: 1500, quantity: 0},
    {id: 5,name: 'Трусы',size: 'M', price: 700, quantity: 0},
    {id: 6,name: 'Носки',size: 'M', price: 500, quantity: 0},
];

const catalogProduct = {
    products : array,

    x (id) {
        console.log(typeof +id)
        console.log(typeof array.id)
        console.log(array.find(product => product.id === +id));
    }

}
catalogProduct.x(2)