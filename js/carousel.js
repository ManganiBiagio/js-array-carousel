const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]
const imagesEl = [];
const anteprime = [];
const boxImagesEl = document.querySelector(".img-box");
const btnUpEl = document.querySelector(".btn-up");
const btnDownEl = document.querySelector(".btn-down");
const anteprimaImg = document.querySelector(".anteprima-box");

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
    const anteprimaEl = document.createElement("img");
    anteprimaEl.src = images[i];
    if (i === indice) {
        anteprimaEl.classList.add("img-fluid", "anteprima-img", "img-active");
    }
    else {
        anteprimaEl.classList.add("img-fluid", "anteprima-img");
    }

    anteprimaEl.style.height = `calc( 100% / ${images.length} )`;

    anteprimaEl.alt = "";
    anteprime[i] = anteprimaEl;
    anteprimaImg.append(anteprimaEl);


}



//************************************************************** */


//************************************************************** */
//EVENTI
btnDownEl.addEventListener("click", function () {

    let oldAnteprima;
    let newAnteprima;
    let oldImage;
    let newImage;
    if (indice === images.length - 1) {
        newImage = imagesEl[0];
        oldImage = imagesEl[images.length - 1];
        oldAnteprima = anteprime[images.length - 1];
        newAnteprima = anteprime[0];
        indice = -1;
    }
    else {
        oldImage = imagesEl[indice];
        newImage = imagesEl[indice + 1];
        oldAnteprima = anteprime[indice];
        newAnteprima = anteprime[indice + 1];

    }
    indice++;
    oldAnteprima.classList.remove("img-active");
    newAnteprima.classList.add("img-active");
    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");

})

btnUpEl.addEventListener("click", function () {

    let oldAnteprima;
    let newAnteprima;
    let oldImage;
    let newImage;
    if (indice === 0) {
        newImage = imagesEl[images.length - 1];
        oldImage = imagesEl[0];
        oldAnteprima = anteprime[0];
        newAnteprima = anteprime[images.length - 1];
        indice = images.length;
    }
    else {
        oldImage = imagesEl[indice];
        newImage = imagesEl[indice - 1];
        oldAnteprima = anteprime[indice];
        newAnteprima = anteprime[indice - 1];
        

    }
    indice--;
    oldAnteprima.classList.remove("img-active");
    newAnteprima.classList.add("img-active");
    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");







})

//************************************************************** */