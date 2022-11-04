const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]
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


}


//************************************************************** */


//************************************************************** */
//EVENTI
btnUpEl.addEventListener("click", function () {

    indice++;
    let oldImage;
    let newImage;
    if (indice === images.length) {
        let indice1=1;
        let indice2=images.length;
         oldImage = document.querySelector(`.img-box :nth-child(${indice2})`);
         newImage = document.querySelector(`.img-box :nth-child(${indice1})`);
         indice=0;
    }
    else {
        oldImage= document.querySelector(`.img-box :nth-child(${indice})`);
        newImage = document.querySelector(`.img-box :nth-child(${indice + 1})`);
    }


    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");






})

btnDownEl.addEventListener("click", function () {
    indice--;
    let oldImage;
    let newImage;
    if (indice === images.length) {
        let indice1=1;
        let indice2=images.length;
         oldImage = document.querySelector(`.img-box :nth-child(${indice2})`);
         newImage = document.querySelector(`.img-box :nth-child(${indice1})`);
         indice=0;
    }
    else {
        oldImage= document.querySelector(`.img-box :nth-child(${indice})`);
        newImage = document.querySelector(`.img-box :nth-child(${indice + 1})`);
    }


    oldImage.classList.remove("d-block");
    oldImage.classList.add("d-none");
    newImage.classList.remove("d-none");
    newImage.classList.add("d-block");







})

//************************************************************** */