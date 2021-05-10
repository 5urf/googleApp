const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
/* 
필터는 마치 forEach에서 함수를 실행하는것과 같이
각각의 item과 같이 실행된다
*/
/*
    처음에, 해야할 일을 생성했을 때 'toDos' array에 추가 되도록 하기위함
    해야할 일을 생성할 때마다 'toDos'라는 array에 추가되도록
*/
let toDos = [];
function deleteToDo(event){ //todoList 삭제
    const btn = event.target; //.target 를 log에 찍으면 대상이 나옴
    const li = btn.parentNode; // 타겟의 부모 노드
    toDoList.removeChild(li);
    // cleanToDos 와 filter가 하는것은 filterFn이 체크가 된 아이템들의 array를 주는것
    const cleanToDos = toDos.filter(function(toDo){ //리스트에 있는 모듬 item을 위한 함수를 실행시키는것 == 필터
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos; // 먼저바꾸고
    saveToDos(); //toDos에 저장
}

// saveToDos()는 ⬆ toDos를 가져와서 로컬에 저장하는 일을 함
function saveToDos(){
    // JSON.stringify == 자바스크립트 object를 string로 바꿔준다!
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    /* 
    document.crateElement
    HTML에서 얻지 않고 js에서 직접 만들어줌
    */ 
    // li == 컨테이너 , 그안에 "span인 text"와 "button"이 들어간다.
    const li = document.createElement("li"); // 비어있는 li 만들고
    const delBtn = document.createElement("button"); // 버튼 생성
    const span = document.createElement("span"); // span 생성
    const newId =  toDos.length +1; // local storage 에도 투두를 저장해둬야 하기 때문!
    // 이모지 입력할때 윈도우+ . || 윈도우 + ;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    
    span.innerText = text;
    // appendChild == 무언가를 그의 father element 안에 넣는 것
    li.appendChild(delBtn); // 버튼을 li 안에 넣기
    li.appendChild(span); // span을 li 안에 넣기
    li.id = newId;  // local storage 에도 투두를 저장해둬야 하기 때문!
    toDoList.appendChild(li); // li를 ul에다 append 하기
    const toDoObj = {
        text: text,
        id: newId   // local storage 에도 투두를 저장해둬야 하기 때문!
    };
    // push를 써서, array 안에 element 하나를 넣어줄 수 있다.
    toDos.push(toDoObj);
    //  push 한 이후에 호출 하도록해야한다
    //  push 이전에 호출해버리면 저장할게 아무것도 없다 push전 toDos는 비어있으니까!
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    // submit 같이 엔터를 눌렀을때 todo를 생성하고 삭제 하기위함
    toDoinput.value = "";
}
// JSON == 'JavaScript Object Notation'의 준말
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); // toDos를 가져온뒤
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // String으로 바꿨던 obj를 다시 object로 변환
        // array가 가진 forEach() 함수
        // array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 줌
        parsedToDos.forEach(function(toDo){ 
            paintToDo(toDo.text);  // 각각에 대해서 paintToDo라는 함수가 실행됨
        })
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
} 

init();