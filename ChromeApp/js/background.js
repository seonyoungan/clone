const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

//html에서 이미지 보이게 하기
//js에서 html element를 생성하기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; 
console.log(bgImage);

//body에 접근
document.body.prepend(bgImage);