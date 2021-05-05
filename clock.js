const clockContainer = document.querySelector(".js-clock"),
    clockTtile = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    /*
    템플릿 리터럴 === `` 
    문자열 생성시 따옴표 대신, 백틱(`)을 사용함
    표현식 삽입 === ${}
    ${} 사이에 변수나 연산 등을 삽입할 수 있다!
    */
    /* 
        ternary operator === 삼항연산자
        ? 는 if처럼 동작함
        10보다 작으면 ? 다음이 동작하고
        거짓이면 : 다음이 동작함
    */
    clockTtile.innerHTML = `${hours < 10 ? '0${hours}' : hours}:${
        minutes < 10 ? '0${minutes}' : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
    getTime();
    /*
    setIntervar(실행할 함수, 실행할시간(밀리세컨드))
     */
    // getTime 함수를 매초마다 실행시키겠다는 뜻!
    setInterval(getTime, 1000);
}
init();