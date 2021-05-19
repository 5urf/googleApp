const weather = document.querySelector(".js-weather")

const API_KEY ="5a34e2e3a2955b4da249885f19b9497f";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude : latitude,
        // longitude : longitude
         // 객체의 key의 이름을 같게 저장 할때는 이렇게도 가능
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}
function handleGeoError(){
    console.log("실패");
}

function askForCoords(){
    // navigator api
    // navigator.geolocation 은 오브젝트다 객체다
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError()) 
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();