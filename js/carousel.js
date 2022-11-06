const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]
const imagesEl = [];
const boxImagesEl = document.querySelector(".img-box");
const btnUpEl = document.querySelector(".btn-up");
const btnDownEl = document.querySelector(".btn-down");
let indice = 0;

//************************************************************** */
//INIZIALIZZO IL CONTENUTO
for (let i = 0; i < images.length; i++) {
    let propriety = "d-none";
    if (i === indice) {
        propriety = "d-block"
    }
    const imgEl = document.createElement("img");
    imgEl.classList.add("my-img", propriety);
    imgEl.src = images[i];
    imgEl.alt = "";
    boxImagesEl.append(imgEl);
    imagesEl[i] = imgEl;



}



//************************************************************** */


//************************************************************** */
//EVENTI
btnUpEl.addEventListener("click", function () {

    
    let oldImage;
    let newImage;
    if (indice === images.length-1) {
        newImage = imagesEl[0];
        oldImage = imagesEl[images.length-1];
        indice = -1;
    }
    else {
        oldImage = imagesEl[indice];
        newImage = imagesEl[indice + 1];

    }
    indice++;
    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");

})

btnDownEl.addEventListener("click", function () {
   
    let oldImage;
    let newImage;
    if (indice === 0) {
        newImage = imagesEl[images.length-1];
        oldImage = imagesEl[0];
        indice = images.length;
    }
    else {
        oldImage = imagesEl[indice];
        newImage = imagesEl[indice - 1];

    }
    indice--;
    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");







})

//************************************************************** */