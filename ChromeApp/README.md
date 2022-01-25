
<b>결과물😑</b>
![chromeApp결과물](https://user-images.githubusercontent.com/74126735/151000185-48c20112-c08e-4f38-a76d-05f43b3f4707.png)



<b>1. 학습영상</b>   
   https://nomadcoders.co/javascript-for-beginners/lobby
   
<b>2. 자바스크립트를 배워야 하는 이유</b>   
1. 모든 곳에서 많이 쓰인닿   
2. 전문가가 되면,, 짱짱한 미래가 보장되어,,있다?   
3. js를 만든 이유 : 넷스케이프(훌륭한 네비게이터)   
 - 원래 html, css만 있었음    
 - 웹 할꺼면,, js하면 전체를 아우르는 것이다    
4. 웹, 비디오게임, 3d모델링 받은 게임,, 디자인,, 가넝가넝   
 - 더 재미있게 할 수 있는 프레임워크도 배우면 좋음 ex. 리액트, ...   
 - js를 배우면 android, ios 만드는 방법도 이해하게 된다.
 - 일렉트론 : js, html, css로 데스크탑 앱을 만들 수 있게 한다.    
5. js로 backend도 만들 수 있다.   
   
<b>3. 처음 안 사실</b>   
1. 자바스크립트는 브라우저에 내장 되어 있다.   
2. 스마트폰에도 내장 되어 있다.   
3. vscode는 js,html,css(일렉트론,,)로 만들어 졌다. 신기해!   
   
<b>4. events 정리(1)</b>   
1. getElementById() : 하나의 값 가져올 때 사용   
2. getElementsByClassName() : 여러 개의 element 가져올 때 사용 (배열 반환)   
3. getElementsByTagName() : 태그아이디 가져오기 배열반환   
4. querySelector() : element를 CSS selector방식으로 검색 (단, 첫번째 element만 가져옴)   
 - querySelector(#hello) == getElementById("hello")   
 - querySelector()만 하위요소를 가져올 수 있어서 많이 사용됨   
5. querySelectorAll() : 조건에 맞는 값을 모두 검색   

<b>5. events 정리(2)</b>   
1. addEventListner("click", function) : js는 듣고 있다가 "click"을 하면 이벤트 실행    
```js
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    console.log("title was clicked");
}
title.addEventListener("click", handleTitleClick);


```
2. window 관련 이벤트</b>   
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

<b>6. clock기능 정리</b>   
1. setInterval과 setTimeout의 차이점   
    - setInterval(실행함수명, 반복ms) : 처음 실행도 반복하는 초가 지나야 반복함   
    - setTimeout(실행할함수명, 반복ms) : 반복ms 시간이 흐른 뒤 한번만 실행됨   
 
2. 간단한 date함수 구현    
```js
const date = new Date();
date.getDay();
date.getFullYear();
date.getHours();
```
    - 위와 같이 작성하면 결과는 01:11:1 형식으로 seconds는 한자리수만 출력된다.   
     해결하기 위해서는 ... padStart를 사용하면 된다.    
   
   
```js
padStart(2, "0") // 길이는 2, 그렇지않으면 첫자리를 0으로 자리수를 채우기 글고 sting임!
padEnd(2,"0") // 길이는 2, 그렇지않으면 끝자리를 0으로 자리수를 채우기 글고sting임!
```

   
    - 변경시, hours은 number이다. text로 변환해서 padStart처리를 하려면 어떻게 해야 하나?   
      String으로 감싸면된다.   

<b>7. 명언 넣기</b>   

<b>8. todo-list</b>   

    - fillter기능 사용하기   
```js
const arr = [123,456,789,1111,22,23345,6166];
function saynum(num) { return num <= 1000}
arr.filter(saynum);
```

<b>9.weather</b>   
1. 나의 위치를 찾는 navigator사용   
   
```js
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
