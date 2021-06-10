'use strict'
// const middle = out.querySelector('#middle');
// const inner = middle.querySelector('#inner');

// inner.onclick = function () {
//     console.log('inner.onclick')
// }

 
// middle.addEventListener('click', function(e){
//     console.log(e)
// })

// 1. Доработать модуль корзины.
//     a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
//     b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида

var catalog_list = [
    {id: 1,name: 'Майка', size: 'M', price: 700, quantity: 0},
    {id: 2,name: 'Кросовки', size: '45', price: 3500, quantity: 0},
    {id: 3,name: 'Бесболка',size: 'M', price: 500, quantity: 0},
    {id: 4,name: 'Рюкзак',size: 'M', price: 1500, quantity: 0},
    {id: 5,name: 'Трусы',size: 'M', price: 700, quantity: 0},
    {id: 6,name: 'Носки',size: 'M', price: 500, quantity: 0},
];

const catalogItem = {
    render(product) {
        return `<div class="product">
                    <div><b>Намиенование</b>: ${product.name}</div>
                    <div><b>Стоимость</b>: ${product.price}</div>
                    <button class="catalogButton" data-id="${product.id}">
                         <p>Добваить в корзину </p>
                    </button>
                </div>`
    }
}

const basketItem = {
    render(product) {
        return `<div class="good">
                    <div><b>Намиенование</b>: ${product.name}</div>
                    <div><b>Стоимость</b>: ${product.price}</div>
                    <div><b>Количество</b>: ${product.quantity}</div>
                </div>`
    }
}
const catalogProduct = {
    catalogItem,
    catalogListBlock: null,
    catalogButton: null,
    products : catalog_list,

    init() {
        this.catalogListBlock = document.querySelector('.catalog-list');
        if (this.products.length) {
            this.products.forEach(product => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(product))
            });
        }
        document.querySelector('.catalog-list').addEventListener('click', (event) => {
            this.containerClickHandler(event)
        });

        productBasket.init()
    },
    
    containerClickHandler(event) {
        if (event.target.className === 'catalogButton') {
            this.addProduct(event.target.dataset.id);
        } else if (event.target.parentElement.className === 'catalogButton') {
            this.addProduct(event.target.parentElement.dataset.id)
        } else {
        }
    },

    addProduct(id) {
        const itemProduct = this.getItemProduct(id)
        productBasket.appendProduct(
            itemProduct.id,
            itemProduct.name,
            itemProduct.price)
        productBasket.render()

    },
    getItemProduct(id) {
        return this.products.find(product => product.id === +id)
    }

}


const productBasket = {
    basketItem,
    basketBlock: null,
    basketGoodsBlock: null,
    basketInfBlock: null,
    basketButtonBlock: null,
    products: catalog_list,

    init() {
        this.basketBlock = document.querySelector('.basket-block');
        this.basketGoodsBlock = document.querySelector('.basket-goods');
        this.basketInfBlock = document.querySelector('.basket-inf');
        this.basketButtonBlock = document.querySelector('.basket-button');
        this.basketButtonBlock.addEventListener('click', this.clearProduct.bind(this));

        this.render();

    },

    clearProduct() {
        this.products.length = 0;
        this.render()
    },

    render() {
        this.basketGoodsBlock.innerHTML = ''
        if (this.products.length) {
            this.products.forEach(product => {
                this.basketGoodsBlock.insertAdjacentHTML('beforeend', this.basketItem.render(product))});
            this.basketInfBlock.textContent = `В корзине: ${this.countBasketProduct()} товара(ов) на сумму ${this.countBasketPrice()} рубля(ей)`
        } else {
            this.basketInfBlock.textContent = `Корзина Пуста`
        }
    },

    countBasketProduct() {
        return this.products.reduce((total, itemProduct) => total + itemProduct.quantity, 0);
    },

    countBasketPrice() {
        return this.products.reduce((total, itemProduct) => total += itemProduct.price * itemProduct.quantity, 0);
    },
    // метод добавляет продукт в корзину, если его там нет, и увеличивает quantity - если продукт в корзине уже есть.
    appendProduct(id, name, price, quantity = 1) {
        let itemProduct = this.products.find(itemProduct => itemProduct.id === id)
        if (itemProduct) {
            itemProduct.quantity += quantity;
        } else this.products.push(
            {
                id: id,
                name: name,
                price: price,
                quantity: quantity,
            }
        )
    },
};

catalogProduct.init()