
//변수선언부
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
/*위의 코드는 이 주석에 달린 아래의 코드와 같은 기능을 한다.
const loginForm = document.getElementById("login-form"); //html에서 login-form를 찾아서 가져와서 js의 변수에 담아준다.
const loginInput = loginForm.querySelector("input"); //위에서 html의 login-form을 가져왔기 때문에 그 다음에는 변수로 담아놓은 것에서 querySelector로 찾을 수가 있다.
const loginButton = loginForm.querySelector("button"); */

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수 : 대문자표기
const USERNAME_KEY = "username";

//login
function onLoginSubmit(event){

    event.preventDefault();
    /*console.log(loginInput.value); //username에 대한 log check
    문제점 : url주소 끝의 ?, input 안의 button을 누르거나 type이 submit인 input을 클릭하면 log기록이 사라지고 재시작됨
    알 수 있는 것 : form안에서 엔터를 누르거나, 버튼을 누르면 input이 더 존재하지 않으면, 자동으로 submit이 된다.
    loginButton.addEventListener("click", onLoginBtnClick); 필요없음 => 이 기능은 원하지 않아. 로그인 ==> 완료로 귀결되는 걸 원하지 않는 나
    처리해야할 것 :
     1) form을 submit할 때 입력값 받아내기
     2) 새로고침막기 (브라우저는 기본적으로 엔터를 누르면 새로고침이 되도록 프로그래밍되어있다.) => argument를 입력해서 function이 하나의 argument를 받도록 한다.*/
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //saving (localStorage를 이용)
    localStorage.setItem(USERNAME_KEY, username);
    //console.log(username);
    /*정리하자면, preventDefault()로 브라우저의 기본특성(엔터=새로고침)을 막고,
    style.css에서 hidden를 만들어서 로그인이되면 화면 전체가 hide되도록 만든것이다?, 그리고 유저이름이 로그 되게끔 console창에 띄움*/

    /*greeting.innerText = "hello "+username + " 🥱";
    greeting.innerText = `hello ${username} 🥱`; //새로운 방식. 변수는 ${변수명}으로 표현하자
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreeting(username);
} 

function handleLinkClick(event){ //information about the event that just happend
    // event.preventDefault(); // 동작막기가 바로 이거여써
    console.dir(event);
}

function paintGreeting(username){
    greeting.innerText = `🥱 hello ${username}` //username을 기억하고 있는지 test해보았다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); //onLoginSubmit();에서, ();는 즉시실행한단 뜻이기 때문에, 사용되지 않는 것임.
//모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들의 정보가 된다. (js가 무료로 그것을 제공한다.)
link.addEventListener("click", handleLinkClick);

//saving (localStorage를 이용)
const savedUsername = localStorage.getItem(USERNAME_KEY); //유저정보가 localStorage에 없을경우 local storage는 null반환
if(savedUsername === null){ //유저정보가 없을 때!
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localForm.addEventListener("submit", onLoginSubmit);
} else{
    //show the greeting
    paintGreeting(savedUsername); //유저정보가 localStorage로부터 오고있다.
}