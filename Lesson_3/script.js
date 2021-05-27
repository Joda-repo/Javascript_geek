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

// 56:00    