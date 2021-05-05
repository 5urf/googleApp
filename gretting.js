const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";
/* Local Storage는 URLs을 기초로 동작한다 */
// name을 저장하기 위함
function saveName(text){
    localStorage.setItem(USER_LS, text);
}


// event의 preventDefault
function handleSubmit(event){
    //event의 기본 동작을 막기 위함
    /* 
    form 의 submit 기본동작이 작동하면 페이지가
    새로고침 되는데 그것을 막기 위함
    */ 
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_ON);
    // 뭔가를 form에 submit 하면 처리하기 위함
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

// name을 불러오도록
function loadName(){
    // localStorage === 작은 정보를 컴퓨터에 저장하는 방법
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // is not
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();