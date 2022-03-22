학습영상 : https://nomadcoders.co/   
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


1. basic   
1) creact-react-app으로 리액트 프로젝트 생성   
  npm init react-app <폴더이름> 또는   
  VS Code로 열고 터미널에서 npm init react-app .   
   
2) 개발모드   
  - 실행하기   
  npm run start   
  : 브라우저가 켜짐 (http://localhost:3000/)   
  : 새로고침을 하지 않아도 코드를 고치고 저장하면 바로바로 반영됨   
   
  - 종료하기   
  ctrl+c   
   
   
2. 개요   
1) render : 화면에서 보고자 하는 내용을 반환   
  특히 렌더링할 내용을 경량화한 React 엘리먼트 반환   
  
  
3. 리액트 특징   
1) Independent Component
  UI를 여러 컴포넌트로 쪼개어 만든다.   
  한 페이지 내의 여러가지 독립된 컴포넌트 생성(버튼, 표 등) -> 조립 -> 화면 구성   
  앱이 복잡해지더라도 유지 보수에 용이하다는 장점을 가짐   
2) One-way data flow   
  데이터의 방향: 단방향(규모가 커져도 데이터 흐름 추적 용이) <-> 양방향(규모 커지면 데이터 흐름 추적 불편)    
  양방향 데이터 플로우에 비해 코드의 양이 많아진다는 단점이 있지만.. 리액트는 VDOM으로 보완할 수 있음   
  
3) VDOM
  DOM: 코드 내의 원하는 위치에 접근하기 위한 방식
  VDOM: 가상의 DOM으로, 변경사항이 있으면 전체가 아닌 해당 부분만 실제 DOM에 반영하는 방식으로 작업 수행됨   
        그 결과, 브라우저 리소스 최소화, 효율성과 속도를 높임   
  
4. 참고로 TypeScript도 React에서 사용할 수 있다.    
  
