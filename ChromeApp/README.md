
<b>๊ฒฐ๊ณผ๋ฌผ๐</b>
![chromeApp๊ฒฐ๊ณผ๋ฌผ](https://user-images.githubusercontent.com/74126735/151000185-48c20112-c08e-4f38-a76d-05f43b3f4707.png)



<b>1. ํ์ต์์</b>   
   https://nomadcoders.co/javascript-for-beginners/lobby
   
<b>2. ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ๋ฐฐ์์ผ ํ๋ ์ด์ </b>   
1. ๋ชจ๋  ๊ณณ์์ ๋ง์ด ์ฐ์ธ๋ฟ   
2. ์ ๋ฌธ๊ฐ๊ฐ ๋๋ฉด,, ์งฑ์งฑํ ๋ฏธ๋๊ฐ ๋ณด์ฅ๋์ด,,์๋ค?   
3. js๋ฅผ ๋ง๋  ์ด์  : ๋ท์ค์ผ์ดํ(ํ๋ฅญํ ๋ค๋น๊ฒ์ดํฐ)   
 - ์๋ html, css๋ง ์์์    
 - ์น ํ ๊บผ๋ฉด,, jsํ๋ฉด ์ ์ฒด๋ฅผ ์์ฐ๋ฅด๋ ๊ฒ์ด๋ค    
4. ์น, ๋น๋์ค๊ฒ์, 3d๋ชจ๋ธ๋ง ๋ฐ์ ๊ฒ์,, ๋์์ธ,, ๊ฐ๋๊ฐ๋   
 - ๋ ์ฌ๋ฏธ์๊ฒ ํ  ์ ์๋ ํ๋ ์์ํฌ๋ ๋ฐฐ์ฐ๋ฉด ์ข์ ex. ๋ฆฌ์กํธ, ...   
 - js๋ฅผ ๋ฐฐ์ฐ๋ฉด android, ios ๋ง๋๋ ๋ฐฉ๋ฒ๋ ์ดํดํ๊ฒ ๋๋ค.
 - ์ผ๋ ํธ๋ก  : js, html, css๋ก ๋ฐ์คํฌํ ์ฑ์ ๋ง๋ค ์ ์๊ฒ ํ๋ค.    
5. js๋ก backend๋ ๋ง๋ค ์ ์๋ค.   
   
<b>3. ์ฒ์ ์ ์ฌ์ค</b>   
1. ์๋ฐ์คํฌ๋ฆฝํธ๋ ๋ธ๋ผ์ฐ์ ์ ๋ด์ฅ ๋์ด ์๋ค.   
2. ์ค๋งํธํฐ์๋ ๋ด์ฅ ๋์ด ์๋ค.   
3. vscode๋ js,html,css(์ผ๋ ํธ๋ก ,,)๋ก ๋ง๋ค์ด ์ก๋ค. ์ ๊ธฐํด!   
   
<b>4. events ์ ๋ฆฌ(1)</b>   
1. getElementById() : ํ๋์ ๊ฐ ๊ฐ์ ธ์ฌ ๋ ์ฌ์ฉ   
2. getElementsByClassName() : ์ฌ๋ฌ ๊ฐ์ element ๊ฐ์ ธ์ฌ ๋ ์ฌ์ฉ (๋ฐฐ์ด ๋ฐํ)   
3. getElementsByTagName() : ํ๊ทธ์์ด๋ ๊ฐ์ ธ์ค๊ธฐ ๋ฐฐ์ด๋ฐํ   
4. querySelector() : element๋ฅผ CSS selector๋ฐฉ์์ผ๋ก ๊ฒ์ (๋จ, ์ฒซ๋ฒ์งธ element๋ง ๊ฐ์ ธ์ด)   
 - querySelector(#hello) == getElementById("hello")   
 - querySelector()๋ง ํ์์์๋ฅผ ๊ฐ์ ธ์ฌ ์ ์์ด์ ๋ง์ด ์ฌ์ฉ๋จ   
5. querySelectorAll() : ์กฐ๊ฑด์ ๋ง๋ ๊ฐ์ ๋ชจ๋ ๊ฒ์   

<b>5. events ์ ๋ฆฌ(2)</b>   
1. addEventListner("click", function) : js๋ ๋ฃ๊ณ  ์๋ค๊ฐ "click"์ ํ๋ฉด ์ด๋ฒคํธ ์คํ    
```js
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    console.log("title was clicked");
}
title.addEventListener("click", handleTitleClick);


```
2. window ๊ด๋ จ ์ด๋ฒคํธ</b>   
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

<b>6. clock๊ธฐ๋ฅ ์ ๋ฆฌ</b>   
1. setInterval๊ณผ setTimeout์ ์ฐจ์ด์    
    - setInterval(์คํํจ์๋ช, ๋ฐ๋ณตms) : ์ฒ์ ์คํ๋ ๋ฐ๋ณตํ๋ ์ด๊ฐ ์ง๋์ผ ๋ฐ๋ณตํจ   
    - setTimeout(์คํํ ํจ์๋ช, ๋ฐ๋ณตms) : ๋ฐ๋ณตms ์๊ฐ์ด ํ๋ฅธ ๋ค ํ๋ฒ๋ง ์คํ๋จ   
 
2. ๊ฐ๋จํ dateํจ์ ๊ตฌํ    
```js
const date = new Date();
date.getDay();
date.getFullYear();
date.getHours();
```
    - ์์ ๊ฐ์ด ์์ฑํ๋ฉด ๊ฒฐ๊ณผ๋ 01:11:1 ํ์์ผ๋ก seconds๋ ํ์๋ฆฌ์๋ง ์ถ๋ ฅ๋๋ค.   
     ํด๊ฒฐํ๊ธฐ ์ํด์๋ ... padStart๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.    
   
   
```js
padStart(2, "0") // ๊ธธ์ด๋ 2, ๊ทธ๋ ์ง์์ผ๋ฉด ์ฒซ์๋ฆฌ๋ฅผ 0์ผ๋ก ์๋ฆฌ์๋ฅผ ์ฑ์ฐ๊ธฐ ๊ธ๊ณ  sting์!
padEnd(2,"0") // ๊ธธ์ด๋ 2, ๊ทธ๋ ์ง์์ผ๋ฉด ๋์๋ฆฌ๋ฅผ 0์ผ๋ก ์๋ฆฌ์๋ฅผ ์ฑ์ฐ๊ธฐ ๊ธ๊ณ sting์!
```

   
    - ๋ณ๊ฒฝ์, hours์ number์ด๋ค. text๋ก ๋ณํํด์ padStart์ฒ๋ฆฌ๋ฅผ ํ๋ ค๋ฉด ์ด๋ป๊ฒ ํด์ผ ํ๋?   
      String์ผ๋ก ๊ฐ์ธ๋ฉด๋๋ค.   

<b>7. ๋ช์ธ ๋ฃ๊ธฐ</b>   

<b>8. todo-list</b>   

    - fillter๊ธฐ๋ฅ ์ฌ์ฉํ๊ธฐ   
```js
const arr = [123,456,789,1111,22,23345,6166];
function saynum(num) { return num <= 1000}
arr.filter(saynum);
```

<b>9.weather</b>   
1. ๋์ ์์น๋ฅผ ์ฐพ๋ navigator์ฌ์ฉ   
   
```js
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
