
// Homework Lesson_1_task_1

function Cels_to_farenheit(celsium) {

    Tf = (9 / 5) * celsium + 32

    return Tf
}

console.log('20 celsium equal to: ', Cels_to_farenheit(20), ' farenheit');

// Homework Lesson_1_task_2

{

    let admin;
    let name;
    name = 'Vasiliy';
    console.log('Before substitution: ', name);
    admin = name;
    console.log('After substitution: ', admin);
}

// Homework Lesson_1_task_3

{
    //В данному случае мы прибавляем объекту (Number)  объект "108" (String). Будет создано число 100 в выводе а после к выводу добавиться строка("108").
    console.log(1000 + '108');
}

// Homework Lesson_1_task_4

// на самом деле по ссылке ниже очень хорошо описано в чем разница. Не хочу переписывать, поэтому скажу своими словами.
"https://learn.javascript.ru/script-async-defer"
    // async - DOM строиться. Запускается скрипт, который ничего не ждет, в том числе другие скрипты.
    // defer - скрипту запускается после прогрузки DOM, но до события DOMContentLoaded.