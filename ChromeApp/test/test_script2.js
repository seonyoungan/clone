const h1 = document.querySelector("div.hello:first-child h1");

/* 
function handleTitleClick(){
    if(h1.style.color ==="blue"){
        h1.style.color = "tomato";
    } else{
        h1.style.color = "blue";
    }
}
*/

/*위의 코드를 좀 더 깔끔하게 만들어보기
function handleTitleClick(){
    const currentColor = h1.style.color; //반복되는 내용은 변수에 담아준다.
    let newColor; //바뀔 color도 변수로 나타내자
    if (currentColor === "blue"){
        newColor = "tomato";
    } else{
        newColor = "blue";
    }
    h1.style.color = newColor; 
    //currentColor = newColor;는 오류가 발생한다.
    //왜? 위에서 변수를 const로 설정했기 때문에 재할당을 할 수 없기 때문이다.
    //그런데 let currentColor로 바꾸면 if문이 실행되지 않는다. 이유는 무엇일까?
}
*/

/*css에서 style 처리를 할 때
function handleTitleClick(){
    // h1.className = "active"; //마우스를 클릭하면 이 함수의 명령어가 실행된다 '
    const activeClass = "active";
    if (h1.classList.contains(activeClass)){ // 만약 activeClass가 classList에 포함되어있다면,
        h1.classList.remove(activeClass); // activeClass를 지워라!
    } else{
        h1.classList.add(activeClass); //아니면 activeClass를 추가해라!
    }
    //className은 고유해서, 이거를 건드리면 html, css파일까지 수정해야할 수 있다.
    //그러면 className이 아니라 classList를 사용해보자
}
*/

function handleTitleClick(){
    h1.classList.toggle("active");
    /*토글의 역할 : h1의 classList에 activeClass가 이미 있는지를 확인해서 toggle이 있다면 active를 제거해준다.
    존재하지 않으면 toggle은 active를 classList에 추가해준다.*/
}

h1.addEventListener('click', handleTitleClick);
