const canvas=document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const INTIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;
//css로 보여지는 캔버스 사이즈와, element로서 픽셀로 움직일 캔버스(js에서)가 필요함
canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;

ctx.fillStyle = "white";  // saving할 때 기본적으로 하얀 배경을 갖게 해주기
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); 
ctx.strokeStyle = INTIAL_COLOR; //기본값 black;
ctx.fillStyle = INTIAL_COLOR; 
ctx.lineWidth = 2.5; // 선의너비 2.5px

const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


//drawing in canvas
let painting=false; //평소에는 paintin(그리기) = false, onMouseDown일때만 true;
let filling = false;
function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}
function onMouseMove(event){
    // offsetX, offsetY : 윈도우 전체 범위를 나타낼 때(clientX, clinetY), offsetX와 offsetY는 캔버스의 범위를 나타냄 => 이정보만 가져오게함
    const x = event.offsetX; 
    const y = event.offsetY;

    // painting을 할 때는 움직이기만할뿐, 그리는 게 필요하지 않음. 그림을 그려야할 때의 if문 생성
    if(!painting){ 
        ctx.beginPath();  // 만일 페인팅을 하지 않을 때는 path를 만들기 직전의 상태를 만들어 주는 느낌? 
        ctx.moveTo(x, y); // x와 y를 이동시킨다.
    } else{
        ctx.lineTo(x, y); // 움직이면서 path만들기(현재 sub-path의 마지막점을 특정좌표와 직선으로 연결한다.)
        ctx.stroke(); // 
    }
}

function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove) 
    canvas.addEventListener("mousedown", startPainting) //마우스로 클릭시
    canvas.addEventListener("mouseup", stopPainting) // 마우스를 뗄 때
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

//changing color
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick
));


//Brush size
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

if(range){
    range.addEventListener("input", handleRangeChange);
}


//fill을 누르면 버튼 fill모드=> innerText는 paint로 바꾸기 기능
function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else{
        filling = true;
        mode.innerText = "paint";
        ctx.fillStyle = ctx.strokeStyle; //fill을 해보자고요
    }
}
if(mode){
    mode.addEventListener("click", handleModeClick)
}

//fill을 해보자고요
function handleCanvasClick(){
    //filling도 하면서! stroke도 그리고 싶을 수 있으니까 if문 쓸것이다.
    if(filling){
        ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE); //가로위치, 세로위치, 가로크기, 세로크기
    } // esle는 없쎃
}

//saving
function handleCM(event){
    event.preventDefault();
}


function handleSavingClick(){
    const image = canvas.toDataURL("image/png"); //canvas라는 데이터를 이미지처럼 얻게하자!
    const link = document.createElement("a"); //존재하지 않는 링크만들기
    link.href = image;
    link.download = "PantingJS[🎨]";
    link.click();
}

if(saveBtn){
    saveBtn.addEventListener("click",handleSavingClick);
}