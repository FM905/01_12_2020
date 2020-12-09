"use strict";
//TODO:уроки 01-05
{


    a = 15;
    console.log(a);
    let number = 5;
    const leftBorderWidth = 1;

    number = 10;
    console.log(number);

    const obj = {
        a: 50
    };

    obj.a = 10

    console.log(obj);
    console.log(name);
    var name = 'Ivan';
} {
    //********************************FIXME: let const var
    {
        {
            let result = 50; //FIXME: let только внутри скобок  
            const result2 = 50; //FIXME:const только внутри скобок
        }

        console.log(result);
        console.log(result2);

        {
            var result3 = 50; //FIXME:var работает вне скобок
        }

        console.log(result3);
    }
}
//TODO:уроки 06
{
const obj = {
    name: "John",   //Объекты
    age: 25,
    isMarried: false
};
console.log(obj.name);
console.log(obj['name']);

let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, [] ];
//            [0]           [1]       [2]   [3]       [4] [5]  console.log(arr[1]);
}
//TODO:уроки 07
{
    "use strict";
alert('Hello!');
const result = confirm('Are u here?');
console.log(result);




}