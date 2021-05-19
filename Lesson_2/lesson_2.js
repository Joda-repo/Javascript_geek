//Lesson_2

//task 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 так как используется преинкрементация сначала изменяется значение 'a' после чего выдается результат.
// d = b++; alert(d);           // 1 так как используется постинкрементация сначала выдается результат 'd', после чего измененяется результат значения 'a'.
// c = (2+ ++a); alert(c);      // 5 в первом шаге a = 2, после чего оно изменилось на 1 = 3, и прибавилось 2 получилось 5.
// d = (2+ b++); alert(d);      // 4 во втором шаге, после результата знаение b = 2, после чего вычислен результат d = 4, после чего изменилось значение b = 3.
// alert(a);                    // 3 по описанной выше логике.
// alert(b);                    // 3 по описанной выше логике.

//task 2

function task_2(){
    var a = 2;
    var x = 1 + (a *= 2); // Сначала выполняется (a *=2) = 4, к получившемуся выражению добавляется 1. равно 5
    console.log(x)
}

//task_2() // <<----- Проверить можно тут

//task 3

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//  если a и b положительные, вывести их разность;
//  если а и b отрицательные, вывести их произведение;
//  если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function task_3(){
    var a = -2;
    var b = -2;

    switch (true) {                     // подглядел на stackoverflow. : ) 
        case a > 0 && b > 0:
            console.log(a - b)
        break;
        case a < 0 && b < 0:
            console.log(a * b)
        break;
        case a <= 0 && b >= 0 || a >= 0 && b <= 0:
            console.log(a + b)
        break;
    }
}

//task_3() // <<----- Проверить можно тут

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 

function task_4(){
    var a = 5
    switch (a) {
        case a = 0:
            console.log(a)
        case a = 1:
            console.log(a)
        case a = 2:
            console.log(a)
        case a = 3:
            console.log(a)
        case a = 4:
            console.log(a)
        case a = 5:
            console.log(a)
        case a = 6:
            console.log(a)
        case a = 7:
            console.log(a)
        case a = 8:
            console.log(a)
        case a = 9:
            console.log(a)
        case a = 10:
            console.log(a)
        case a = 11:
            console.log(a)
        case a = 12:
            console.log(a)
        case a = 13:
            console.log(a)
        case a = 14:
            console.log(a)
        case a = 15:
            console.log(a)
    }

}

//task_4() // <<----- Проверить можно тут

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function task_5(){

    function addition(a,b){
        return a + b;
    }
    function computation(a,b){
        return a - b;
    }
    function division(a,b){
        return a / b;
    }
    function multiplication(a,b){
        return a * b;
    }

    console.log(addition(10,2));
    console.log(computation(10,2));
    console.log(division(10,2));
    console.log(multiplication(10,2));
}

//task_5() // <<----- Проверить можно тут


//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch)

function task_6(a,b,operation) {
    switch (true) {                     
        case operation === '-':
            console.log(a - b)
        break;
        case operation === '*':
            console.log(a * b)
        break;
        case operation === '+':
            console.log(a + b)
        break;
        }
}

//task_6(10,2,'-') // <<----- Проверить можно тут


