```html
<html>
    <body>
    </body>
    <!--react import-->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
        const span = React.createElement("span"); //react import -> react objcet에 접근
        ReactDOM.render(reder할 것(?), 위치) // render : react element를 html로 만들어 배치한다는 것
    </script>
</html>
```

-  vanilaJs와 reactJs의 차이점
    - vanilaJs : html 먼저 만들고, js에서 조작
    - reactJS : js 먼저 시작하고, html이 만들어짐


```jsx
const containter = React.createElement("div", null, [span, btn]);
        ReactDOM.render(containter, root);
// container라는 변수 내에 div가 render되어있고, 그 안에 span과 btn이 있음. 
```