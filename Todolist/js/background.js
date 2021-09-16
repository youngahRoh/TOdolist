const imges = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
const body = document.querySelector("body");

const chosenImage = imges[Math.floor(Math.random() * imges.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;

backgroundImage.classList.add("bg-img");
document.body.appendChild(backgroundImage);

///prepentchild(); 사용하면 소스 제일 안쪽에 들어감

