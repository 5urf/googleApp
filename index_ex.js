// const == 변수를 상수화 할때 사용한다. let 만이 값을 다른 값으로 바꿀수있다 const는 안됌
let a = 221;
const b = a - 5;
a = 4
console.log(b, a);

const num = 1;
console.log(num)
const bl = true;
const str = "문자열은 따옴표"
console.log(str, bl)
// js 에서는 배열 쓸때 [] < - 안에 값 넣는다 !!
const day = [
    "mon",
    "the",
    "wen",
    "thu",
    "fri",
    "sat",
    "sun"
];
const numArr = [
    1,
    2,
    3,
    4,
    5,
    6
]
console.log(day, numArr)
// Object 선언 == {} 를 쓰면 된다
const hInfo = {
    name: "hak",
    age: 26,
    gender: "male",
    // Object 안에 Array 써도 문제 없음
    favFoods: [
        "rice", "pizza", "snack"
    ],
    // Obj의 Array
    favShoes: [
        {
            name: "Dunk",
            Cool: false
        }, {
            name: "jordan",
            Cool: true
        }
    ]
}
console.log(hInfo,console)

function sayHello(name,age){
    return `Hello ${name} you are ${age} years old`;
}
const greetHak = sayHello("hak, 26")
console.log(greetHak);

const calculator = {
    plus: function(a,b){
        return a+b;
    }
}

console.log();
const plus = calculator.plus(5,5)
console.log(plus);
const title = document.querySelector("#title");
// Dom == Document Object Module
title.innerHTML = "Hi From Js";
function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick); 