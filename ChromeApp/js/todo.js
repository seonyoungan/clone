const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    //지금 우리가 삭제해야할 것은 li니까 event.target.parentElement까지 가야하는 것이다.
    const li = event.target.parentElement; //target : element의 속성, parentElemnent : 이걸 해야 누구를 삭제해야하는지 알 수 있게 되는거지
    
    //html(=보여지는부분)에서 삭제! 
    li.remove(); 

    //db에서 삭제 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    /*todo : toDos DB에 있는 요소 중 하나.
    toDo.id가 li.id가 아닌것들로 필터링하기
    */
    saveToDos();
}

//localstorage에 저장해보기
TODOS_KEY = "Todos";
let toDos = []; //const로 선언 : 어플시작시 toDos는 항상 비워져있음.  / let으로 하면 업데이트가 됨
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
} 
/*로컬스토리지에 text가 저장되도록..
JSON.stringify(toDos) : text형태로 저장할 수 있나봐
["s","s","s","d"]이런 형식으로..?...원리가 어려웡 */

function paintToDo(newTodo){
    const li = document.createElement("li"); //변수명은 상관없으나 createElement("li")는 꼭 이렇게 써야댄당
    li.id = newTodo.id;

    const span = document.createElement("span"); //span 기능 가져오깅
    span.innerText = newTodo.text;
    const button = document.createElement("button") //버튼 기능 가져오깅 (event와 수신하게끔)
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
   
    li.appendChild(span); //li는 span이라는 자식을 가지게 된것이다.
    li.appendChild(button); //append기능은 늘 가장 마지막에 놓여져있어야한다.
    toDoList.appendChild(li); //toDoList는 li라는 자식을 가지게 된것이다. so cool.
}

function handleToDoSubmit(event){
    event.preventDefault(); //enter를 쳐도 새로고침이 되지 않도록 만들기 (greeting에서도 했다)
    const newTodo = toDoInput.value; 

    /*toDoInput.value;를 비워주자.
    왜? toDoInput.value;를 -> newTodo라는 변수에 복사하는 거니까!*/
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }; //storage에서 {text : "어쩌구" id : "12354435"} 식으로 저장되도록 object생성
    toDos.push(newTodoObj); //
    
    paintToDo(newTodoObj); //paintToDo를 호출한 후 newTodo에 보내는 것임 text가 아니라 object로..
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);
/*동작순서
1. 사용자가 form을 입력한 후  submit하면,
2. 프로그램은 input된 내용을 지움
3. 그리고 그 텍스트(newTodo)를 toDos(array)에 push함
4. 화면에 toDo를 그려줌
5. toDo들을 저장함
6. 각각이 다르게 동작할 수 있도록 forEach함*/


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    //로컬스토리지에서 가져온 string을 살아있는 JS object로 만들기 (.복원)
    const parsedToDos = JSON.parse(savedToDos);
    
    toDos = parsedToDos; // let toDos = [];를 한 후  toDos에 가져오기
    //array 내에 있는 item들을 각각 다르게 활용(function)하고 싶을 경우 어떻게 해야할까?
    parsedToDos.forEach(paintToDo);
}

