const IMGES = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
const IMG_NUMBER = 9;

const getRandoms = () => {
    return Math.floor(Math.random() * IMGES.length );
}

const paintImage = (e) => {
    const backgroundImage = document.createElement("img");
 backgroundImage.src  = "url('"+ IMGES[e] +"')";
 //backgroundImage.src = IMGES[e];

 body.style.backgroundImage = backgroundImage;
}