const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    /* 
    document.crateElement
    HTML에서 얻지 않고 js에서 직접 만들어줌
    */ 
    // li == 컨테이너 , 그안에 "span인 text"와 "button"이 들어간다.
    const li = document.createElement("li"); // 비어있는 li 만들고
    const delBtn = document.createElement("button"); // 버튼 생성
    // 이모지 입력할때 윈도우+ . || 윈도우 + ;
    delBtn.innerText = "❌";
    const span = document.createElement("span"); // span 생성
    span.innerText = text
    // appendChild == 무언가를 그의 father element 안에 넣는 것
    li.appendChild(delBtn); // 버튼을 li 안에 넣기
    li.appendChild(span); // span을 li 안에 넣기
    toDoList.appendChild(li); // li를 ul에다 append 하기
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    // submit 같이 엔터를 눌렀을때 todo를 생성하고 삭제 하기위함
    toDoinput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
} 

init();