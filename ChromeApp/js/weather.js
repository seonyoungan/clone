

const API_KEY ="21913673885121d20c44ab6468f02b46"
//js에서 url불러오기


function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lng = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//navigator사용
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

