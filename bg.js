const body = document.querySelector("body");

const IMG_NUMBER = 4;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg` //랜덤이 0을 줄수도 있기때문에 +1함
    image.classList.add("bgImage");
    body.prepend(image)
}

function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER); // math.floor 나머지 숫자 버림
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}
init();