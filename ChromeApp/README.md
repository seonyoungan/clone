
##1. 학습영상 : https://nomadcoders.co/javascript-for-beginners/lobby
   
##2. 자바스크립트를 배워야 하는 이유
1. 모든 곳에서 진쯔 많이 쓰인닿   
2. 전문가가 되면,, 짱짱한 미래가 보장되어,,있다?   
3. 자바스크리프를 만든 이유 : 넷스케이프(훌륭한 네비게이터)   
 - 원래 html, css만 있었음    
 - 웹 할꺼면,, js하면 전체를 아우르는 것이다    
4. 웹, 비디오게임, 3d모델링 받은 게임,, 디자인,, 가넝가넝   
 - 더 재미있게 할 수 있는 프레임워크도 배우면 좋음 ex. 리액트, ...   
 - js를 배우면 android, ios 만드는 방법도 이해하게 된다.
 - 일렉트론 : js, html, css로 데스크탑 앱을 만들 수 있게 한다.    
5. js로 backend도 만들 수 있다.   
   
##3. 처음 안 사실
1. 자바스크립트는 브라우저에 내장 되어 있다.   
2. 스마트폰에도 내장 되어 있다.   
3. vscode는 js,html,css(일렉트론,,)로 만들어 졌다. 신기해!   
   
##4. events 정리(1)
1. getElementById() : 하나의 값 가져올 때 사용   
2. getElementsByClassName() : 여러 개의 element 가져올 때 사용 (배열 반환)   
3. getElementsByTagName() : 태그아이디 가져오기 배열반환   
4. querySelector() : element를 CSS selector방식으로 검색 (단, 첫번째 element만 가져옴)   
 - querySelector(#hello) == getElementById("hello")   
 - querySelector()만 하위요소를 가져올 수 있어서 많이 사용됨   
5. querySelectorAll() : 조건에 맞는 값을 모두 검색   

##5. events 정리(2)
1. addEventListner("click", function) : js는 듣고 있다가 "click"을 하면 이벤트 실행    
```js
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    console.log("title was clicked");
}
title.addEventListener("click", handleTitleClick);


```
2. window 관련 이벤트
```js
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SoS no WIFI!");
}
function handleWindowOnline(){
    alert("all good!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
```